FROM node:14
RUN apt-get update && apt-get install -y nodejs yarn

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --production=true

COPY . .

CMD ["yarn", "start"]

EXPOSE 8080