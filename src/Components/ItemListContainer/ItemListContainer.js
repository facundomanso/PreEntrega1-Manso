import React from 'react'
import QuantityButton from '../Items/QuantityButton'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='itemListContainer'>
    <h1>{greeting}</h1>
    <QuantityButton/>
    </div>
  )
}

export default ItemListContainer