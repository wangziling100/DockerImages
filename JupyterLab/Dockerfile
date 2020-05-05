FROM alpine
RUN apk --no-cache add build-base libzmq musl-dev zeromq-dev python3 python3-dev &&\
    pip3 --no-cache-dir install pyzmq jupyterlab &&\
    apk del build-base musl-dev zeromq-dev python3-dev
    #pip3 uninstall pyzmq
EXPOSE 8888
RUN mkdir -p /opt/app/data
CMD jupyter lab --ip=* --port=8888 --no-browser --notebook-dir=/opt/app/data --allow-root
