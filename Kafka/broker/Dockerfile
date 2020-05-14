FROM wangziling100/bash
ENV KAFKA_BROKER_CONFIG="/usr/kafka_broker/config/server.properties" \
    ZOOKEEPER_SERVER="localhost:2181"
RUN apk --no-cache add openjdk8-jre &&\
    rm -r /usr/lib/jvm/java-1.8-openjdk &&\
    cd /usr/ &&\
    wget https://github.com/wangziling100/DockerImages/raw/master/Kafka/broker/kafka_broker_wangziling100.zip &&\
    unzip kafka_broker_wangziling100 &&\
    rm kafka_broker_wangziling100 &&\
    mv java-1.8-openjdk /usr/lib/jvm/java-1.8-openjdk

EXPOSE 9092
CMD ["bin/bash", "/usr/kafka_broker.sh"]
