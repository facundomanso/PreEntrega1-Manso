import React from 'react'
import ItemCount from '../Items/ItemCount'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='itemListContainer'>
    <h1>{greeting}</h1>
    <ItemCount/>
    </div>
  )
}

export default ItemListContainer