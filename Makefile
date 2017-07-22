default: test

get:
	go get -u github.com/golang/dep/cmd/dep

deps: get
	dep ensure
	npm install

build: build-go build-js

build-go:
	go build -o bin/main

build-go-mac:
	GOOS=darwin GOARCH=amd64 go build -o bin/main
	
build-js:
	npm run build

test:
	go test

run:
	go run main.go json.go template.go

run-js:
	npm run watch

deploy:
	./deploy.sh
