FROM golang:latest AS builder
WORKDIR /go/src/github.com/lowply/soichi-mizutani.com/
RUN go get -u github.com/golang/dep/cmd/dep
COPY . .
RUN dep ensure
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM alpine:latest
WORKDIR /home/
COPY --from=builder /go/src/github.com/lowply/soichi-mizutani.com/app .
COPY ./templates ./templates
COPY ./data.json ./data.json
CMD ["./app"]

MAINTAINER Sho Mizutani <lowply@gmail.com>
