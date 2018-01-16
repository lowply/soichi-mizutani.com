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