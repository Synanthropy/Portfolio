import React from 'react'
import NavMenu from './NavMenu'

function Header() {
  return (
    <div className='header'>
      <div className='blur'>
        <NavMenu/>
      </div>
    </div>
  )
}

export default Header