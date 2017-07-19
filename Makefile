default: run

install:
	dep ensure -update
	npm install

build:
	npm run build
	go build -o bin/main

run:
	go run main.go pages.go json.go template.go

run-js:
	npm run watch

dsstore:
	find . -name .DS_Store -delete
