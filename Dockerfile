FROM mhart/alpine-node:5.1.0

MAINTAINER Alberto García Lamela <alberto.garcial@hotmail.com>

RUN apk add --update make gcc g++ python
RUN npm install -g gulp

WORKDIR /src
ADD . .

RUN npm install

EXPOSE 3000
CMD ["gulp", "serve"]
