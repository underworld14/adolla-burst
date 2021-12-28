import 'regenerator-runtime/runtime.js'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import React from 'react'
import { render } from 'react-dom'

import './scss/volt.scss'

// vendor styles
import '@fortawesome/fontawesome-free/css/all.css'
import 'react-datetime/css/react-datetime.css'

InertiaProgress.init()

createInertiaApp({
  resolve: (name) => require(`./pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})
