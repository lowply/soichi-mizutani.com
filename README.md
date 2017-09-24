# soichi-mizutani.com

## Requirements for development

- Go / dep
- Node / npm
- Docker / Docker Compose

```
$ git clone https://github.com/lowply/soichi-mizutani.com.git
$ cd soichi-mizutani.com

## To work on the go app
$ cd app
$ make deps
$ make run

## To work on the frontend
$ cd static
$ npm install
$ npm run watch

## Build docker images and run
$ docker-compose up -d
```
