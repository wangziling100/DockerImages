FROM node:lts-alpine
RUN mkdir /workspace &&\
    cd /workspace &&\
    npm install -g next react react-dom &&\
    npx create-react-app default --template typescript &&\
    cd default &&\
    npx -p @storybook/cli sb init &&\
    yarn add -D @storybook/preset-create-react-app &&\
    yarn add antd &&\
    yarn cache clean &&\
    mkdir src/components
ADD storybook/ColorButton.stories.tsx /workspace/default/src/stories
ADD storybook/ColorButton.tsx /workspace/default/src/components
ADD storybook/config.ts /workspace/default/.storybook
EXPOSE 3000
EXPOSE 9009
