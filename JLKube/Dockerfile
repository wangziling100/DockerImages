FROM node:lts-alpine
RUN mkdir /workspace && cd /workspace &&\
    apk update && apk add jq build-base libzmq musl-dev python3 python3-dev zeromq-dev git openssh &&\
    pip3 install pyzmq jupyterlab &&\
    pip3 install --upgrade jupyterlab-git &&\
    apk del build-base musl-dev python3-dev zeromq-dev &&\
    npm install -g typescript &&\
    wget https://github.com/wangziling100/JLTerminal/archive/master.zip &&\
    unzip master.zip &&\
    rm master.zip &&\
    cd JLTerminal-master &&\
    jlpm &&\
    jlpm build &&\
    jupyter labextension link . &&\
    jupyter labextension update --all &&\
    jupyter lab build &&\
    npm uninstall $(ls -1 node_modules | tr '/\n' ' ') &&\
    npm uninstall -g typescript &&\
    apk del build-base musl-dev python3-dev zeomq-dev
EXPOSE 8888
#RUN mkdir -p /opt/app/data
CMD jupyter lab --ip=* --port=8888 --no-browser --notebook-dir=/workspace --allow-root
