FROM node:lts-alpine
RUN mkdir /workspace &&\
    cd /workspace &&\
    npm install -g next react react-dom &&\
    npx create-react-app default --template typescript &&\
    cd default &&\
    npx -p @storybook/cli sb init &&\
    yarn add -D @storybook/preset-create-react-app &&\
    yarn cache clean
EXPOSE 3000
EXPOSE 9009
