import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div>
    categories
        <ul>
        <li>
            <Link to={'/store/vege'}>Vegetables</Link>
        </li>
        <li>
            <Link to={'/store/fruit'}>Fruits</Link>
            </li>
        <li>
            
            <Link to={'/store/nut'}>Nuts</Link>
        </li>
        
    </ul>
    </div>
  )
}

export default Categories