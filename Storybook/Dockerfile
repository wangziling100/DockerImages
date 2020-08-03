FROM node:lts-alpine
RUN mkdir /workspace &&\
    cd /workspace &&\
    npm install -g next react react-dom &&\
    npx create-react-app default --template typescript &&\
    cd default &&\
    npx -p @storybook/cli sb init &&\
    yarn add -D @storybook/preset-create-react-app &&\
    yarn add antd  &&\
    yarn add -d postcss-import postcss-loader postcss-cssnext cssnano sugarss atutoprefixer postcss-mixins tailwindcss &&\
    npx tailwindcss init &&\
    yarn cache clean &&\
    mkdir src/css &&\
    mkdir src/components
ADD storybook/ColorButton.stories.tsx /workspace/default/src/stories
ADD storybook/ColorButton.tsx /workspace/default/src/components
ADD storybook/config.ts /workspace/default/.storybook
ADD storybook/1-Button-antd.stories.js /workspace/default/src/stories
ADD storybook/main.js /workspace/default/.storybook
ADD storybook/tailwind.css /workspace/default/src/css
ADD storybook/postcss.config.js /workspace/default
EXPOSE 3000
EXPOSE 9009
