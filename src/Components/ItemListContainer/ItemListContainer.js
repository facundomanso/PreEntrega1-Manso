import React, { useEffect, useState } from 'react'
import ItemList from '../itemList/ItemList'
import { GetProducts } from '../AsyncMock';


const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])


  useEffect(()=>{
    GetProducts()
        .then((resultado)=>{
              setProducts(resultado);
        })
        .catch((error)=> {
          console.log(error)
        })
  },[]);
  
  return (
    <div className='itemListContainer'>
    <h1>{greeting}</h1>
    <ItemList products = {products} />
  
    </div>
  )
}

export default ItemListContainer