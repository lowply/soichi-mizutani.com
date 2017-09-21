default: test

get:
	go get -u github.com/golang/dep/cmd/dep

deps: get
	dep ensure

build:
	go build -o bin/main

docker-build:
	docker build -t lowply/soichi-mizutani.com .

test:
	go test

run:
	go run main.go json.go template.go
