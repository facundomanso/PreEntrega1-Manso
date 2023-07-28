import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div>
    categories
        <ul>
        <li>
            <Link to={'/store/vegetables'}>Vegetables</Link>
        </li>
        <li>
            <Link to={'/store/fruits'}>Fruits</Link>
            </li>
        <li>
            
            <Link to={'/store/nuts '}>Nuts</Link>
        </li>
        
    </ul>
    </div>
  )
}

export default Categories