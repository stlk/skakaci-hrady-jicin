FROM ruby:2.6

ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

RUN git config --global user.email "josef.rousek@gmail.com"

WORKDIR /app/

ADD Gemfile* /app/

RUN bundle install
