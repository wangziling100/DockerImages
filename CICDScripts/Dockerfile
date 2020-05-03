FROM alpine
RUN apk update && apk add git openssh &&\
    mkdir -p /usr/scripts && cd /usr/scripts &&\
    ssh-keygen -R github.com &&\
    ssh-keyscan -t rsa domain.com >> ~/.ssh/known_hosts &&\
    git clone git@github.com:wangziling100/CICDScrpits.git
