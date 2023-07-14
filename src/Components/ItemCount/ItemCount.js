import React, { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

const [quantity , setQuantity] = useState(initial);

const HandleDecrement = () =>{
  if (quantity > 1){
    setQuantity(quantity - 1);
  }
};

const HandleIncrement = () => {
  if (quantity < stock){
    setQuantity(quantity + 1)
  } 
  
};



  return (
    <div className='itemCountContainer'>
      <div className='itemCountControls'>
        <button className='decrementButton'
        onClick={HandleDecrement}>-</button>
        <p>{quantity}</p>
        <button className='incrementButton'
        onClick={HandleIncrement}>+</button>
        </div>
      <div className='addButtonContainer'
      >
        <button onClick={() =>onAdd(quantity)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ItemCount