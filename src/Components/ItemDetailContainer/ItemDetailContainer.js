import React, { useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {  GetItemById } from '../AsyncMock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);

    const {itemId} = useParams();

    useEffect(()=>{
        GetItemById(itemId)
            .then((resultado)=>{
                setProduct(resultado);
            
            })
            .catch((error)=>{
                console.log(error)
            })
    },[itemId]);

  return (
    <div className='itemDetailContainer'>
        <ItemDetail 
                product = {product}/>
    </div>
  )
}

export default ItemDetailContainer