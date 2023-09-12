# This defines our starting point
FROM node:18
RUN mkdir /usr/src/app 
WORKDIR /usr/src/app
RUN npm install -g @angular/cli 
COPY . . 
RUN npm install
CMD ng serve --port=3000 --host=0.0.0.0