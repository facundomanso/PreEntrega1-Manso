import React, { useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import GetProducts from '../AsyncMock'

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        GetProducts()
            .then((resultado)=>{
                setProducts(resultado);
            })
            .catch((error)=>{
                console.log(error)
            })
    },[]);

  return (
    <div className='itemDetailContainer'>
        <ItemDetail products = {products}/>
    </div>
  )
}

export default ItemDetailContainer