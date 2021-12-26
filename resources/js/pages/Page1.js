import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const Test = () => {
  return (
    <div>
      Hello from page 1<Link href="/test">test</Link>
    </div>
  )
}

// All pages need to be exported as default
export default Test
