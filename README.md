# soichi-mizutani.com

## Requirements for development

- Go / dep
- Node / npm
- Docker / Docker Compose

```
$ git clone https://github.com/lowply/soichi-mizutani.com.git
$ cd soichi-mizutani.com

## To develop go app
$ cd app
$ make deps
$ make run

## To develop frontend
$ cd static
$ npm install
$ npm run watch

## Build docker images and run
$ docker-compose up -d
```
