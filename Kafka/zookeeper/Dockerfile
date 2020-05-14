FROM wangziling100/bash
ENV ZOOKEEPER_CONFIG="/usr/kafka_zookeeper/config/zookeeper.properties"
RUN apk --no-cache add openjdk8-jre &&\
    rm -r /usr/lib/jvm/java-1.8-openjdk/ &&\
    cd /usr/ &&\
    wget https://github.com/wangziling100/DockerImages/raw/master/Kafka/zookeeper/kafka_zookeeper_wangziling100.zip &&\
    unzip kafka_zookeeper_wangziling100.zip &&\
    mv java-1.8-openjdk /usr/lib/jvm/
EXPOSE 2181
EXPOSE 2888
EXPOSE 3888
CMD ["bin/bash", "/usr/kafka_zookeeper.sh"]
