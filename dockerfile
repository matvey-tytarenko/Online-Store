FROM node:18

WORKDIR /app

COPY . .

RUN npm install

ENV MONGO_URI=mongodb://localhost:27017

CMD ["npm", "run", "dev"]