FROM ruby:2.2.5-slim

RUN apt-get update
RUN apt-get install -y sudo
RUN apt-get install -y git
RUN apt-get install -y build-essential

RUN useradd -u 1001 jenkins
RUN adduser jenkins sudo
RUN echo 'jenkins ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers
