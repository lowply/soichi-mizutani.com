FROM node:latest AS node
WORKDIR /usr/src/app
COPY . .
RUN npm i
RUN npm run sass

FROM golang:latest AS golang
WORKDIR /go/src/app
COPY . .
RUN go-wrapper download
RUN go-wrapper install
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o bin/main .

FROM alpine:latest
WORKDIR /app
COPY --from=node /usr/src/app/public ./public
COPY --from=golang /go/src/app/bin/main .
COPY ./templates ./templates
CMD ["./main"]

MAINTAINER Sho Mizutani <lowply@gmail.com>
