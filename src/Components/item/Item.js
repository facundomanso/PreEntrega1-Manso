import React from 'react'

const Item = ({name,price}) => {
  return (
    <div className='item'> 
        <h4>Nombre: {name}</h4>
        <h4>Precio: ${price}</h4>
    </div>
  )
}

export default Item