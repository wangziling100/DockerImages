FROM node:lts-alpine AS intermedia
RUN mkdir /workspace && cd /workspace &&\
    apk --no-cache add jq build-base libzmq musl-dev python3 python3-dev zeromq-dev git openssh &&\
    pip3 install --no-cache-dir pyzmq jupyterlab jupyterlab-git &&\
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
    # apk del build-base musl-dev python3-dev zeromq-dev jq &&\
    yarn cache clean &&\
    rm -r /usr/share/jupyter/lab/staging &&\
    # rm -r /usr/local/lib/* &&\
    cd /usr/local/bin/ &&\
    # ls | grep -v docker-entrypoint.sh | xargs -r rm &&\
    rm -r /usr/local/include/node &&\
    rm -r /root/.npm &&\
    cd /workspace &&\
    rm -r JLTerminal-master &&\
    rm -r /tmp/* &&\
    cp -r /usr/share /tmp &&\
    mkdir /usr/scripts &&\
    echo 'echo edit your scripts in /usr/scripts/entry_point.sh' > /usr/scripts/entry_point.sh 
EXPOSE 8888
CMD jupyter lab --ip=* --port=8888 --no-browser --notebook-dir=/workspace --allow-root
