FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

EXPOSE 5000

CMD [ "node", "index.js" ]