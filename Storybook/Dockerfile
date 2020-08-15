FROM node:lts-alpine
RUN mkdir /workspace &&\
    cd /workspace &&\
    apk add --no-cache bash &&\
    npm install -g next react react-dom &&\
    npx create-react-app default --template typescript &&\
    cd default &&\
    npx -p @storybook/cli sb init &&\
    yarn add -D @storybook/preset-create-react-app postcss-import postcss-loader cssnano sugarss autoprefixer postcss-mixins tailwindcss &&\
    yarn add -D classnames @types/classnames &&\
    yarn add antd &&\
    yarn cache clean &&\
    npx tailwindcss init &&\
    mkdir /load &&\
    mkdir src/css &&\
    mkdir src/components
ADD storybook/ColorButton.stories.tsx /workspace/default/src/stories
ADD storybook/ColorButton.tsx /workspace/default/src/components
#ADD storybook/config.ts /workspace/default/.storybook
ADD storybook/1-Button-antd.stories.js /workspace/default/src/stories
ADD storybook/main.js /workspace/default/.storybook
ADD storybook/tailwind.css /workspace/default/src/css
ADD storybook/postcss.config.js /workspace/default
ADD storybook/links /workspace
ADD storybook/build-links.sh /workspace
WORKDIR /workspace/default
CMD yarn storybook
EXPOSE 3000
#EXPOSE 9009
EXPOSE 6006
