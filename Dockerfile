FROM node:14

WORKDIR /mydogs-api

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3333

EXPOSE 3333

CMD ["npm", "start"]