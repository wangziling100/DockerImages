FROM wangziling100/bash
ENV KAFKA_BROKER_SERVER="localhost:9092" \
    KAFKA_TOPICS="test" 
RUN apk --no-cache add openjdk8-jre tmux &&\
    rm -r /usr/lib/jvm/java-1.8-openjdk/ &&\
    cd /usr/ &&\
    wget https://github.com/wangziling100/DockerImages/raw/master/Kafka/producer/kafka_producer_wangziling100.zip &&\
    unzip kafka_producer_wangziling100.zip &&\
    mv java-1.8-openjdk /usr/lib/jvm/ &&\
    rm kafka_producer_wangziling100.zip
CMD ["bin/bash", "/usr/kafka_producer.sh"]
