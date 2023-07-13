import React, { useState } from 'react'

const QuantityButton = () => {

const [quantity , setQuantity] = useState(0);
const [stock, settock] = useState(5);

const HandleCounterLess = () =>{
  if (quantity <= 0){
  alert('minimo');
  }else{
    setQuantity(quantity - 1)}
};

const HandleCounterAdd = () => {
  if (quantity >= stock){
    alert('no stock')
  } else {
    setQuantity(quantity + 1);
  }
};



  return (
    <div className='quantityButtonContainer'>
        <button className='lessQuantity'
        onClick={HandleCounterLess}>-</button>
        <p>{quantity}</p>
        <button className='addQuantity'
        onClick={HandleCounterAdd}>+</button>

    </div>
  )
}

export default QuantityButton