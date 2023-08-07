import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, name, img}) => {
  return (
    <div className='item' > 
        
        <img src={img} alt={name} className='itemImg'></img>
        <Link className='itemLink' key={id} to={`/store/${id}`}>{name}</Link>
    </div>
  )
}

export default Item