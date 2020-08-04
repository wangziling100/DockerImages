FROM node:lts-alpine
ENV NEXT_TELEMETRY_DEBUG=1
RUN mkdir /workspace &&\
    cd /workspace &&\
    wget https://github.com/wangziling100/next.js/archive/canary.zip &&\
    unzip canary.zip &&\
    rm canary.zip &&\
    npm install -g next react react-dom
EXPOSE 3000
