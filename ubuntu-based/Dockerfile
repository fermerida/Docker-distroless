FROM ubuntu:14.04
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get -qq update
RUN apt-get install -y nodejs npm

RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

VOLUME ["/app"]

ADD . /app
RUN cd /app && npm install
EXPOSE 3000
WORKDIR /app

CMD ["npm", "start"]