FROM golang:alpine
WORKDIR /go/src/app
COPY . .
RUN go-wrapper download
RUN go-wrapper install
RUN go build -o app .
CMD ["./app"]

MAINTAINER Sho Mizutani <lowply@gmail.com>
