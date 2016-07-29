default: run

gae:
	goapp serve

run:
	go run main.go pages.go json.go template.go standalone.go 

build:
	go build -o bin/main

build-linux:
	GOOS=linux GOARCH=amd64 go build -o bin/main
	
deps:
	glide install
