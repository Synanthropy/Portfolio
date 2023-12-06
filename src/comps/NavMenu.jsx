import React from 'react'

function NavMenu() {
  return (
    <div className='nav-menu'>
        <nav>
            <ul className='nav-bar'>
                <li className='nav-item'><a href='#home'>Home</a></li>
                <li className='nav-item'><a href='#skills'>Skills</a></li>
                <li className='nav-item'><a href='#projects'>Projects</a></li>
                <li className='nav-item'><a href='#side-quest'>Side Quest</a></li>
                <li className='nav-item'><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavMenu