#@env: producer
# This script collects messages from its slave container and sends them to kafka broker.

# command: watch_dog.sh [--broker borker ip and port] [-t topics]
usage(){
    echo "Usage:"
    echo "watch_dog.sh [--broker borker ip and port] [-t topics]"
    exit -1
}

broker=$KAFKA_BROKER_SERVER
topics=$KAFKA_TOPICS
#broker="localhost:9092"
#topics="test,test1"
args="`getopt -u -q -o "b:ht:" -l "broker,help,topics" -- "$@"`"
[ $? -ne 0 ] && usage 

set -- ${args}

while [ -n "$1" ]; do
    case "$1" in
        -b|--broker) broker=$2
            shift;;
        -h|--help)
            usage
            shift;;
        -t|--topics)
            topics=$2
            shift;;
        --) shift
            break;;
        *) usage
    esac
    shift
done
if [ -z "$broker" ]; then
    echo "no broker information"
    exit 1
fi
if [ -z "$topics" ]; then
    echo "no topic is set"
    exit 1
fi
    
topics=($(echo $topics | tr ',' ' '))

clean(){
    tmux kill-session -t init
    for topic in ${topics[@]}; do
        pipe="/tmp/$topic_out"
        rm -f $pipe
    done
}
trap clean EXIT
declare -A PID

init_send(){
    read line < $pipe
    tmux send-keys -t "init:$topic" "$line" ENTER
    return
}

tmux new -s init -d
for topic in ${topics[@]}; do
    # build listeners
    tmux neww -a -n $topic -t init
    tmux send-keys -t "init:$topic" "/usr/origin/bin/kafka-console-producer.sh --bootstrap-server $broker --topic $topic" ENTER
    # build pipes
    pipe="/tmp/$topic_out"
    if [ ! -p $pipe ]; then
        if [ -f $pipe ]; then
            rm $pipe
        fi
        mkfifo $pipe
        chmod 777 $pipe
    fi
    #check if producer prepared
    producer_running=""
    while [ -z "$producer_running" ]; do
        sleep 0.01
        producer_running=`ps -ef | grep -w $topic`
        echo 'wait producer to start...'
    done

    # init listener
    init_send &
    PID+=([$topic]=$!)
done

# check if proc running
check_run(){
    # $1: pid
    ProcNumber=`ps -ef |grep -w $1|grep -v grep|wc -l` 
    #tmp=`ps -ef |grep -w $1|grep -v grep`
    #echo -----
    #echo $tmp
    if [ $ProcNumber -le 0 ]; then
        return 0
    else
        return 1
    fi
}

# send messages
send(){
    # $1: topic
    read line < /tmp/$1
    tmux send-keys -t "init:$1" "$line" ENTER
    return
}

while true; do
    for topic in ${topics[@]}; do
        sleep 0.01
        check_run ${PID[$topic]}
        run=$?
        if [ $run -eq 0 ]; then
            send $topic &
            PID[$topic]=$!
        fi
    done
done
        
clean
