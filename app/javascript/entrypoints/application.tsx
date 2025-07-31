import { createInertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import type { PageComponent, Pages } from '../types/layout'

const pages = import.meta.glob('../Pages/**/*.tsx') as Pages
const preloadedPages = import.meta.glob('../Pages/{Dashboard,Home}.tsx', { eager: true }) as Record<
  string,
  { default: PageComponent }
>

document.addEventListener('DOMContentLoaded', () => {
  // Set CSRF header
  const metaTag = document.querySelector('meta[name="csrf-token"]')
  const csrfToken = metaTag?.getAttribute('content') || ''
  axios.defaults.headers.common['X-CSRF-Token'] = csrfToken

  createInertiaApp({
    resolve: async (name: string) => {
      const path = `../Pages/${name}.tsx`
      const importPage = pages[path]
  
      if (!importPage) throw new Error(`Page not found: ${name}`)
  
      const module =
        preloadedPages[path] ?? (await importPage())
  
      return (module as { default: PageComponent }).default as any
    },
  
    setup({ el, App, props }) {
      const root = createRoot(el)
      root.render(<App {...props} />)
    },
  })
})
