FROM node:lts-alpine
RUN apk add --no-cache git bash && \
    npm install -g lerna && \
    mkdir workspace && \
    cd workspace
ADD README /workspace
ADD lerna.json /workspace
ADD package.json /workspace
    
