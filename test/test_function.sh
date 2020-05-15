root_dir=$(cd $(dirname $0); pwd)/..
docker run --name producer-test --network host -v /tmp:/tmp -v $root_dir/watch_dog.sh:/usr/watch_dog.sh -v $HOME/workspace/origin:/usr/origin wangziling100/kafka-producer:test bash /usr/watch_dog.sh

docker container rm -f producer-test
