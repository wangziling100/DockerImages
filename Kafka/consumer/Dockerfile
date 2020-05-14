FROM wangziling100/bash
ENV KAFKA_SERVER="localhost" \
    KAFKA_SERVER_PORT=9092 \
    KAFKA_CONSUMER_TOPIC="test" \
    KAFKA_CONSUMER_FROM_BEGINNING="--from-beginning"
RUN apk --no-cache add openjdk8-jre &&\
    rm -r /usr/lib/jvm/java-1.8-openjdk/ &&\
    cd /usr/ &&\
    wget https://github.com/wangziling100/DockerImages/raw/master/Kafka/consumer/kafka_consumer_wangziling100.zip &&\
    unzip kafka_consumer_wangziling100.zip &&\
    mv java-1.8-openjdk /usr/lib/jvm/
CMD ["bin/bash", "/usr/kafka_consumer.sh"]
