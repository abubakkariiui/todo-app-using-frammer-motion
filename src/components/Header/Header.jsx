import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
        <header className='header'>
            <img className='header_icon' src="./svg/main.svg" alt="logo" />
            <h1 className="header_title">Todo App</h1>
        </header>
    </>
  )
}

export default Header