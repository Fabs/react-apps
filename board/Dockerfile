FROM ruby:2.3.0
RUN apt-get update -qq && apt-get install -y build-essential
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y nodejs-legacy

RUN curl -sL https://install.meteor.com | sed s/--progress-bar/-sL/g | /bin/sh

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD . $APP_HOME