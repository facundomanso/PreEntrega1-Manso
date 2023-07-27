import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navBar'>
    <h3>Ecommerce</h3>
    <ul>
        <li>
            <a href='/#'>Home</a>
        </li>
        <li>
            <a href='/#'>Gallery</a>
        </li>
        
            <Link to={'/detail'}>Products</Link>
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