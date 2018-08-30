# this dockerfile uses the bumo blockchian image
# Version 0.1

FROM ubuntu:14.04

MAINTAINER Hosea <starit@msn.cn>

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

RUN apt-get update && apt-get install -y \
        vim \
        wget \
        automake \
        autoconf \
        libtool \
        g++ \
        libssl-dev \
        cmake \
        libbz2-dev \
        python \
        unzip \
        && rm -rf /var/lib/apt/lists/*

ADD . /root/bumo

WORKDIR /root/bumo

RUN cd build && ./install-build-deps-linux.sh

RUN cd ..

RUN make

RUN sed -i "s/sudo//g" /root/bumo/build/linux/MakeSupplement
