FROM node:14
WORKDIR ui
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 8080
RUN npm run prod:client
CMD ["node", "server/client.js"]
