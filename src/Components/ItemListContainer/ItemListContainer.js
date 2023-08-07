import React, { useEffect, useState } from 'react'
import ItemList from '../itemList/ItemList'
import { GetProducts } from '../AsyncMock';
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {

  const [products, setProducts] = useState([])

  const { itemId } = useParams();

  useEffect(()=>{
    GetProducts()
        .then((resultado)=>{
            if(!itemId) 
              setProducts(resultado);
              else
              setProducts(resultado.filter(item=>item.category === itemId))
        })
        .catch((error)=> {
          console.log(error)
        })
  },[]);
  
  return (
    <div className='itemListContainer'>
    
    <ItemList products = {products} />
  
    </div>
  )
}

export default ItemListContainer