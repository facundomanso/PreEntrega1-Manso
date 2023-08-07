import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
  return (
    
    <div className='itemDetail'> 
        
            <div>
            <h4>Nombre: {product.name}</h4>
            <h4>Description: {product.description}</h4>
            <h4>Price: ${product.price}</h4>
            <img src={product.img} alt={product.name} className='itemImg'></img>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('se agregaron', quantity)} />
            </div>
        
    </div>
    
  )
}

export default ItemDetail