import React, { useEffect, useState } from 'react'
import ItemList from '../itemList/ItemList'
import { GetProducts } from '../AsyncMock';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  const { itemCategory } = useParams();

  useEffect(()=>{
    GetProducts()
        .then((resultado)=>{
            if(!itemCategory) 
              setProducts(resultado);
              else
              setProducts(resultado.filter(item=>item.category === itemCategory))
        })
        .catch((error)=> {
          console.log(error)
        })
  },[itemCategory]);
  
  return (
    <div className='itemListContainer'>
    
    <ItemList products = {products} />
  
    </div>
  )
}

export default ItemListContainer