Docker Registry Marathon CI example
===================================

This is a super simple opinionated CI tool for demo purposes Reactjs app working as a bridge between a Docker Registry and Marathon.

WIP

# How to run it

## Local

``` gulp ```

You should be access via 127.0.0.1:3000

## Docker

``` docker-compose up -d ```

## Marathon

``` curl -XPOST -x '' marathon-url:8080/v2/apps -d@marathon.json ``` 
