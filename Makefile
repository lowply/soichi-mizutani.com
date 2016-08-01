default: run

install:
	glide install
	npm install

run:
	goapp serve -port 8888

build:
	NODE_ENV=production ./node_modules/.bin/webpack --optimize-minimize

deploy:build
	goapp deploy

build-dev:
	./node_modules/.bin/webpack

watch:
	./node_modules/.bin/webpack -w

go-standalone:
	go run main.go pages.go json.go template.go standalone.go

go-build:
	go build -o bin/main

go-build-linux:
	GOOS=linux GOARCH=amd64 go build -o bin/main
	
