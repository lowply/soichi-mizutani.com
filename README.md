# soichi-mizutani.com

![](https://github.com/lowply/soichi-mizutani.com/workflows/Build%20and%20deploy%20the%20master%20branch/badge.svg)

[soichi-mizutani.com](https://soichi-mizutani.com)

## Development

- Install [Hugo](https://gohugo.io/)
- Clone this repository
- Run `hugo server`

## Deployment

- Run `firebase deploy -m "$(cat .git/refs/heads/master)" --project soichi-mizutani-fb --only hosting`
- If your token has been expired, run `firebase login:ci` and update the token
- Make sure you also update the token in [this repo's Secrets](https://github.com/lowply/soichi-mizutani.com/settings/secrets) too