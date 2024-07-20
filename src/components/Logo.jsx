 





import React from 'react'
import logo from  "../assets/blog_logo.jpeg"

function Logo({ width = '100px' }) {
  return (

    <img className='w-10 rounded-2xl' src={logo} alt='logo'></img>

  )
}

export default Logo