default: run

get:
	go get -u github.com/golang/dep/cmd/dep
	go get -u github.com/mitchellh/gox

deps: get
	dep ensure
	npm install

build: build-go build-js

build-go:
	GOOS=linux GOARCH=amd64 go build -o bin/main

build-js:
	npm run build

run:
	go run main.go json.go template.go

run-js:
	npm run watch
