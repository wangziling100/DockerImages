FROM alpine/git:latest
RUN apk --no-cache add bash jq python3 &&\
    mkdir /usr/scripts &&\
    mkdir /workspace &&\
    cd /usr/scripts &&\
    #wget https://github.com/wangziling100/CICDScrpits/archive/master.zip &&\
    wget https://github.com/wangziling100/CICDScrpits/archive/master.zip &&\
    unzip master.zip &&\
    rm master.zip
