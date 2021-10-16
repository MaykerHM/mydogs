FROM node:14

WORKDIR /mydogs-api

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]