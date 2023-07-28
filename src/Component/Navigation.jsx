import React from 'react'

 const Navigation = () => {
  return (
    <div>
    <nav className='container'>
        <div className='logo'>
        <img src='./Image/brand_logo.png' alt='Brand-logo'/>
        </div>
    
        <ul>
            <li>Menu</li>
            <li>location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button>login</button>

        
    </nav>
    </div>
  )
}
export default Navigation;
