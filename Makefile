default: test

deps:
	dep ensure
	npm i

build:
	go build -o bin/main

test:
	go test

run:
	go run main.go json.go template.go

docker-build:
	docker build -t lowply/soichi-mizutani.com .

docker-run:
	docker run -d --name soichi-mizutani.com --publish 9999:9999 lowply/soichi-mizutani.com:latest
