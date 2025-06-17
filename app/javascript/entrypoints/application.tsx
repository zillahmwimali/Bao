import { createInertiaApp } from '@inertiajs/inertia-react'
import { createRoot } from 'react-dom/client'
import React from 'react'


createInertiaApp({
  resolve: name => {
    return import(`../Pages/${name}.tsx`).then(module => module.default)
  },
  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(<App {...props} />)
  },
})
