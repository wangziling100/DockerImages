FROM wangziling100/jlkube:base
RUN apk --no-cache add bash git &&\
    pip3 --no-cache-dir install jupyterlab-git &&\
    jupyter labextension install @wangziling100/jlterminal &&\
    jupyter lab build &&\
    yarn cache clean &&\
    rm -r /usr/share/jupyter/lab/staging &&\
    rm -r /usr/share/jupyter/lab/settings &&\
    rm /usr/share/jupyter/lab/imports.css &&\
    rm -rf /tmp/* &&\
    rm -r /usr/libexec &&\
    rm /usr/share/jupyter/lab/static/*map &&\
    mkdir /usr/scripts &&\
    mkdir /workspace &&\
    echo 'echo edit your scripts in /usr/scripts/entry_point.sh' > /usr/scripts/entry_point.sh 
EXPOSE 8888
CMD jupyter lab --ip=* --port=8888 --no-browser --notebook-dir=/workspace --allow-root
