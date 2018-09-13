# this dockerfile uses the bumo blockchian image
# Buchain Version 1.0.0.8

FROM ubuntu:14.04

MAINTAINER Hosea <starit@msn.cn>

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

RUN apt-get update && apt-get install -y \
        vim \
        wget \
        && rm -rf /var/lib/apt/lists/*

WORKDIR /root

RUN wget -P /usr/local https://github.com/bumoproject/bumo/releases/download/1.0.0.8/buchain-1.0.0.8-linux-x64.tar.gz

RUN cd /usr/local && mkdir buchain-temp && tar xzvf buchain-1.0.0.8-linux-x64.tar.gz -C ./buchain-temp --strip-components 1 && rm -rf buchain-1.0.0.8-linux-x64.tar.gz

RUN cd /usr/local/buchain-temp/config && cp bumo-single.json bumo.json