import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({products}) => {
  return (
    
    <div className='itemDetail'> 
        {products.map(product=>
            <div>
            <h4>Nombre: {product.name}</h4>
            <h4>Description: ${product.description}</h4>
            <h4>Precio: ${product.price}</h4>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('se agregaron', quantity)} />
            </div>
        )}
    </div>
    
  )
}

export default ItemDetail