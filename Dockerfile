FROM node:18-slim

ENV NODE_ENV development

USER root

RUN apt-get update && apt-get upgrade -y

RUN mkdir -p /usr/src/app/node_modules
RUN mkdir -p /usr/src/app/tmp

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

RUN npm install mysql2

COPY . .

EXPOSE 3001 

CMD ["npm", "start"]
