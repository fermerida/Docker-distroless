FROM ubuntu:14.04
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN npm config set strict-ssl false
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

VOLUME ["/app"]

ADD . /app
WORKDIR /app

RUN npm install
EXPOSE 3000

CMD ["node", "index.js"]