FROM alpine/git:latest
RUN apk --no-cache add bash jq&&\
    mkdir /usr/scripts &&\
    mkdir /workspace &&\
    cd /usr/scripts &&\
    wget https://github.com/wangziling100/CICDScrpits/archive/master.zip &&\
    unzip master.zip &&\
    rm master.zip
