# soichi-mizutani.com

[soichi-mizutani.com](https://soichi-mizutani.com)

## Development

- Install [Hugo](https://gohugo.io/)
- Clone this repository
- Run `make server`
  - To build, run `make`

## Deployment

- Just push to the `main` branch. GitHub Actions will build the site and deploy it to Azure Blob Storage
- Asset files such as images are stored in the `static/assets` directory
  - To deploy them, run `./script/deploy-assets.sh`

## Hosting

- CDN: Cloudflare
- Origin: Azure Blob Storage static website
