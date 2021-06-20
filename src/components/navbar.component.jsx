import React from 'react'

import useThemeSwitcher from './../hooks/useThemeSwitcher'

import './navbar.styles.css'

export const Navbar = () => {

    const ThemeSwitcher = useThemeSwitcher()

    return (
            <nav className='navbar' >
              <div className='navbar-container'>
                <div className='navbar-text'>Where in the world?</div>
                <div className='mode'>
                    {ThemeSwitcher}
                </div>
              </div>
        </nav>
    )
}


