default: run

run:
	go run *.go

build:
	go build -o bin/main

build-linux:
	GOOS=linux GOARCH=amd64 go build -o bin/main
	
deps:
	glide install
