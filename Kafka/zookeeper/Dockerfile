FROM wangziling100/bash
ENV ZOOKEEPER_CONFIG="/usr/kafka_zookeeper/config/zookeeper.properties"
RUN apk --no-cache add openjdk8-jre &&\
    rm -r /usr/lib/jvm/java-1.8-openjdk/
COPY kafka_zookeeper /usr/kafka_zookeeper
COPY java-1.8-openjdk/ /usr/lib/jvm/java-1.8-openjdk
COPY kafka_zookeeper.sh /usr/kafka_zookeeper.sh
EXPOSE 2181
EXPOSE 2888
EXPOSE 3888
CMD ["bin/bash", "/usr/kafka_zookeeper.sh"]
