#!/bin/bash

# Use jenkins job name as image name
image_name=$JOB_NAME

echo $BUILD_VERSION
version="${BUILD_VERSION}"

registry_url="dev.hub.dztec.net"

full_name="${registry_url}/${image_name}:${version}"
latest_name="${registry_url}/${image_name}:latest"

echo "---------------------"
echo "copy project files to docker folder"
cp -r ./dist ./docker
cd ./docker

echo "---------------------"
echo "start to build images"
docker build . -t $full_name
docker push $full_name
docker tag $full_name $latest_name
docker push $latest_name

echo "---------------------"
echo "start clean images"
docker rmi $full_name
docker rmi $latest_name

echo "---------------------"
echo "build and push docker image success!"

