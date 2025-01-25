import React from 'react'

const Header = () => {
  return (
    <div className='header-section'>
        <div className="container">
            <div className="header-inner">
                <a href="#" className='logo'>Renewtrade</a>
                <div className="menu-btn">
                    Menu <span><img src="./images/icons/menu.svg" alt="icon" /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header