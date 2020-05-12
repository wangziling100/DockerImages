FROM wangziling100/bash
ENV KAFKA_SERVER="localhost" \
    KAFKA_SERVER_PORT=9092 \
    KAFKA_CONSUMER_TOPIC="test" \
    KAFKA_CONSUMER_FROM_BEGINNING="--from-beginning"
RUN apk --no-cache add openjdk8-jre &&\
    rm -r /usr/lib/jvm/java-1.8-openjdk/
COPY kafka_consumer /usr/kafka_consumer
COPY java-1.8-openjdk/ /usr/lib/jvm/java-1.8-openjdk
COPY kafka_consumer.sh /usr/kafka_consumer.sh
CMD ["bin/bash", "/usr/kafka_consumer.sh"]
