import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, ViteClient } from 'vite-ssr-components/hono'
import { appendTrailingSlash } from 'hono/trailing-slash'

import { Index } from './content/index'
import { About } from './content/about'

const app = new Hono()

const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <ViteClient />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Link href="/src/style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})

app.use(renderer)
app.use(appendTrailingSlash())

app.get('/', (c) => c.render(
  <Index />
))

app.get('/about/', (c) => c.render(
  <About />
))

app.get('/works/:category/:name', (c) => c.render(
  <About />
))

export default app
