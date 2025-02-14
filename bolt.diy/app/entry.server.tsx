import type { EntryContext } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { renderToString } from 'react-dom/server'

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  )

  responseHeaders.set('Content-Type', 'text/html')

  return new Response(
    `<!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bolt.DIY</title>
      </head>
      <body>
        <div id="root">${markup}</div>
      </body>
    </html>`,
    {
      status: responseStatusCode,
      headers: responseHeaders,
    }
  )
}
