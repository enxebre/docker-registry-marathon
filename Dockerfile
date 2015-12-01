FROM node:4.2.2-wheezy

MAINTAINER Alberto García Lamela <alberto.garcial@hotmail.com>

RUN npm install -g gulp

WORKDIR /src
ADD . .

RUN npm install

EXPOSE 3000
CMD ["gulp", "serve"]
