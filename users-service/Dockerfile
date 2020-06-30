FROM node:latest

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
RUN npm install

COPY . /app

CMD ["node", "server"]


