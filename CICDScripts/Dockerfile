FROM alpine/git:latest
RUN apk --no-cache add bash &&\
    mkdir /usr/scripts &&\
    cd /usr/scripts &&\
    wget https://github.com/wangziling100/CICDScrpits/archive/master.zip &&\
    unzip master.zip &&\
    rm master.zip

