import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navBar'>
    <h3>Ecommerce</h3>
    <ul>
        <li>
            <Link to={'/home'}>Home</Link>
        </li>
            <Link to={'/detail'}>Store</Link>
        <li>
            <a href='/#'>About Us</a>
        </li>
        <li>
            <a href='/#'>Contact</a>
        </li>
    </ul>    
    <CartWidget/>    

    </div>
  )
}

export default NavBar