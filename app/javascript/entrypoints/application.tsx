import { createInertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { createRoot } from 'react-dom/client'


createInertiaApp({
  resolve: name => {
    return import(`../Pages/${name}.tsx`).then(module => module.default)
  },
  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(<App {...props} />)
  },
})
