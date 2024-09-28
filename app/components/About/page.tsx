import Link from 'next/link'
import React from 'react'

const aboutpage = () => {
  return (
    <div>
      <div className='h-screen w-[100%] bg-green-900'>
      <h1>about page

        <Link href='/navbar'></Link>
      </h1>
      </div>
    </div>
  )
}

export default aboutpage