import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script, Link, ViteClient } from 'vite-ssr-components/hono'
import { appendTrailingSlash } from 'hono/trailing-slash'

import { Top } from './top'
import { About } from './about'
import { Company } from './company'
import { Works } from './works'
import { Data } from './data'

type Variables = {
  title?: string
}

const app = new Hono<{ Variables: Variables }>()

const renderer = jsxRenderer(({ children }, c) => {
  const title = c.get('title')
  const pageTitle = title ? `${title} | Soichi Mizutani Design Office Co., Ltd. - 水谷壮市デザイン事務所` : "Soichi Mizutani Design Office Co., Ltd. - 水谷壮市デザイン事務所"
  return (
    <html lang="ja">
      <head>
        <ViteClient />
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Link href="/src/css/main.css" rel="stylesheet" />
        <link href="/favicon.png" rel="icon" sizes="32x32" type="image/png" />
        <Script type="module" src="/src/js/main.js" />
      </head>
      <body>{children}</body>
    </html>
  )
})

app.use(renderer)
app.use(appendTrailingSlash())

app.get('/', (c) => {
  c.set('title', "")
  return c.render(
    <Top />
  )
})

app.get('/about/', (c) => {
  c.set('title', "About")
  return c.render(
    <About />
  )
})

app.get('/company/', (c) => {
  c.set('title', "Company")
  return c.render(
    <Company />
  )
})

// Defaults to the first work in the category
app.get('/works/:category/', (c) => {
  const category = c.req.param('category')

  if (!Data[category]) {
    return c.notFound()
  }

  const first = Object.keys(Data[category].works)[0]
  if (!first) {
    return c.notFound()
  }

  return c.redirect(`/works/${category}/${first}/`)
})

app.get('/works/:category/:work/', (c) => {
  const category = c.req.param('category')
  const work = c.req.param('work')

  if (!Data[category]) {
    return c.notFound()
  }

  if (!Data[category].works[work]) {
    return c.notFound()
  }

  const workData = Data[category].works[work]
  c.set('title', workData.title_en)

  return c.render(
    <Works categoryName={category} workName={work} />
  )
})

export default app
