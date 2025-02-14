import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

// UnoCSS のスタイルをインポート
import '@unocss/reset/tailwind.css'

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  // Safari のサポート
  window.setTimeout(hydrate, 1)
}
