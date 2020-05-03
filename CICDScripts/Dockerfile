FROM alpine
RUN apk update && apk add git openssh &&\
    ssh-keygen -R github.com &&\
    mkdir ~/.ssh &&\
    touch ~/.ssh/known_hosts &&\
    ssh-keyscan -t rsa domain.com >> ~/.ssh/known_hosts &&\
    mkdir -p /usr/scripts && cd /usr/scripts &&\
    git clone git@github.com:wangziling100/CICDScrpits.git
