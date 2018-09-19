# soichi-mizutani.com

[soichi-mizutani.com](https://soichi-mizutani.com)

## Development

Step 1: Create pages-gem Docker image if you haven't

```
git clone https://github.com/github/pages-gem.git
cd pages-gem
make image_alpine
```

Step 2: Run Jekyll via Docker

```
docker-compose up
```
