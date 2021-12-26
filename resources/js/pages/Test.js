import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const Test = () => {
  return (
    <div>
      Hello from test
      <Link href="/page1">Page 1</Link>
    </div>
  )
}

// All pages need to be exported as default
export default Test
