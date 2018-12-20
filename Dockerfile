FROM node:9
MAINTAINER dalongrong
LABEL email="1141591465@qq.com"
WORKDIR /app
COPY .  /app
RUN yarn config set registry https://registry.npm.taobao.org && yarn
CMD [ "yarn","all" ]
