FROM node:12-slim
WORKDIR ui
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 8080
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN npm run prod:server
CMD ["node", "client/server.js"]
