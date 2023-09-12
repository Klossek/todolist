# This defines our starting point
FROM node:18
RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app
RUN npm install -g @angular/cli 
COPY ./package.json /package.json
COPY ./package-lock.json /package-lock.json
RUN npm install