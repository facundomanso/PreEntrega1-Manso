import React from 'react'

const Item = ({name,price}) => {
  return (
    <div className='item'> 
        <h4>{name}</h4>
        <h4>{price}</h4>
    </div>
  )
}

export default Item