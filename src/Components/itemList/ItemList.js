import React from 'react'
import Item from '../item/Item'


const ItemList = ({products}) => {
  return (
    <div className='itemList'>
        {products.map(product=> 
        <Item 
            key={product.id}
            name={product.name}
            price={product.price}
            id ={product.id}
        />)}
    </div>
  )
}

export default ItemList