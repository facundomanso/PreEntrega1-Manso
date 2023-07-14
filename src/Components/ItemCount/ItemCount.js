import React, { useState } from 'react'

const ItemCount = () => {

const [quantity , setQuantity] = useState(0);
const [stock, setStock] = useState(5);

const HandleCounterLess = () =>{
  if (quantity <= 0){
  alert('minimo');
  }else{
    setQuantity(quantity - 1)}
};

const HandleCounterAdd = () => {
  if (quantity >= stock || stock == 0){
    alert('no stock')
  } else {
    setQuantity(quantity + 1);
  }
};



  return (
    <div className='itemCountContainer'>
        <button className='lessQuantity'
        onClick={HandleCounterLess}>-</button>
        <p>{quantity}</p>
        <button className='addQuantity'
        onClick={HandleCounterAdd}>+</button>

    </div>
  )
}

export default ItemCount