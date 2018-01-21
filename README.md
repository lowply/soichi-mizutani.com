# soichi-mizutani.com

[soichi-mizutani.com](https://soichi-mizutani.com)

## Development

- Install [launch_socket_server](https://github.com/sstephenson/launch_socket_server) to listen to port 80
- Run `ln -s $(pwd)/soichi-mizutani.localhost.conf /usr/local/etc/nginx/servers/`
- `nginx -t && brew services start nginx`

```
$ git clone https://github.com/lowply/soichi-mizutani.com.git
$ cd soichi-mizutani.com
$ make deps
$ make run
```

To watch sass files:

```
$ npm run sassw
```

Then browse to `http://soichi-mizutani.localhost`

## Running in production

```
$ docker-compose build
$ docker-compose up -d
```
