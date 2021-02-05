FROM node:slim
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install --production
RUN npm run build
EXPOSE 3000

CMD npm run prod