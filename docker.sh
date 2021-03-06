#!/bin/bash

set -e

project_path=$(cd $(dirname $0); pwd -P)
project_docker_path="$project_path/docker"
project_docker_buchain_path="$project_docker_path/buchain"
source $project_docker_path/bash.sh
developer_name=$('whoami');

app_basic_name=bumo

app="$developer_name-$app_basic_name"

# image
bumo_image=hoseadevops/ubuntu-bumo:14.04-1.0.0.7

# container
bumo_container=$app-dev

# container dir
project_docker_bumo_path="$project_docker_path/bumo"

#---------- bumo container ------------#
source $project_docker_path/bumo/container.sh

function run()
{
    _buchain
    run_bumo
}

function clean()
{
    rm_bumo
}


function help()
{
cat <<EOF
    Usage: sh docker.sh [options]

        Valid options are:

        run
        clean

EOF
}

action=${1:-help}
ALL_COMMANDS="run clean bumod"
list_contains ALL_COMMANDS "$action" || action=help
$action "$@"
