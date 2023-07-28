import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, name,price}) => {
  return (
    <div className='item'> 
        <h4>Nombre: {name}</h4>
        <h4>Price: ${price}</h4>
        <Link key={id} to={`/store/${id}`}>View Details</Link>
    </div>
  )
}

export default Item