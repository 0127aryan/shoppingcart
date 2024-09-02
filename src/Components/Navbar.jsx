import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/navbar.css'

const Navbar = ({size, setShow}) => {
  return (
    <nav>
    <div className='navbox'>
        <span className='myshop'>Shop It Out</span>
        <div className='cart' onClick={() =>setShow(false)}>
        <span className='carticon'>
            <i className='fas fa-cart-plus'></i>
        </span>
        <span className='cartnumber'>
            {size}
        </span>

        </div>

    </div>

    </nav>
  )
}

export default Navbar