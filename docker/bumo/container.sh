#!/bin/bash
set -e


function _buchain()
{
    if [ ! -d $project_docker_buchain_path ];then

        docker run -d $args --name $bumo_container $bumo_image /bin/bash -c 'service bumo start && while true; do sleep 50; done'

        docker cp $bumo_container:/usr/local/buchain-temp $project_docker_buchain_path

        rm -rf $project_docker_buchain_path/bin
        rm -rf $project_docker_buchain_path/scripts

        container_name=$bumo_container

        local cmd="docker ps -a -f name='^/$container_name$' | grep '$container_name' | awk '{print \$1}' | xargs -I {} docker rm -f --volumes {}"
        eval $cmd

        echo "* \n!.gitignore" >> $project_docker_buchain_path/.gitignore
    fi
}

function run_bumo()
{
    _buchain

    local args='--privileged'

    args="$args -p 36002:36002 -p 36003:36003"

    args="$args -v $project_docker_buchain_path/config:/usr/local/buchain/config"
    args="$args -v $project_docker_buchain_path/coredump:/usr/local/buchain/coredump"
    args="$args -v $project_docker_buchain_path/data:/usr/local/buchain/data"
    args="$args -v $project_docker_buchain_path/jslib:/usr/local/buchain/jslib"
    args="$args -v $project_docker_buchain_path/log:/usr/local/buchain/log"

    sub_cmd="cd /usr/local && \cp -rf buchain-temp/* buchain; rm -rf buchain-temp; ln -s /usr/local/buchain/scripts/bumo /etc/init.d/bumo; ln -s /usr/local/buchain/scripts/bumod /etc/init.d/bumod; service bumod start";

    run_cmd "docker run -d $args --name $bumo_container $bumo_image /bin/bash -c '$sub_cmd; while true; do sleep 50; done';"
}


function rm_bumo()
{
    rm_container $bumo_container
}

function send_cmd_to_bumo_container()
{
    local cmd=$2
    run_cmd "docker exec -it $bumo_container bash -c '$cmd'"
}

function bumod()
{
    local cmd=$2
    run_cmd "docker exec -it $bumo_container su -c 'service bumod $cmd'"
}

function bumo()
{
    local cmd=$2
    run_cmd "docker exec -it $bumo_container su -c 'service bumo $cmd'"
}

