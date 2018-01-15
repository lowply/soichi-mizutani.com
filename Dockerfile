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
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o bin/main .

FROM alpine:latest
COPY --from=node /usr/src/app/public ./public
COPY --from=golang /go/src/app/bin/main .
COPY ./templates ./templates
COPY ./log ./log
CMD ["./main"]

MAINTAINER Sho Mizutani <lowply@gmail.com>
