#!/usr/bin/bash

AUTHOR="wangziling100"
PROJ_NAME="kafka-producer"
BUILD_LATEST_TAG="test"
BUILD_CURRENT_TAG="1.0"
docker rmi $AUTHOR/$PROJ_NAME:${BUILD_LATEST_TAG} -f
docker rmi $AUTHOR/$PROJ_NAME:${BUILD_CURRENT_TAG} -f
docker build --rm=true -t $AUTHOR/$PROJ_NAME:${BUILD_LATEST_TAG} -t $AUTHOR/$PROJ_NAME:${BUILD_CURRENT_TAG} `dirname $0`

