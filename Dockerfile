FROM node:11.14.0-alpine

ENV INSTALL_PATH /app

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

# RUN yarn global add create-react-app

COPY . .

RUN yarn install

CMD ["yarn", "start"]