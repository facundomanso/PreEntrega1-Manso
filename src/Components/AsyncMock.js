
    const products = [
        {
            id: 1,
            name: 'coso1',
            description: 'este es el producto 1',
            price: 1100
        },
        {
            id: 2,
            name: 'coso2',
            description: 'este es el producto 2',
            price: 1200
        },
        {
            id: 3,
            name: 'coso3',
            description: 'este es el producto 3',
            price: 1300
        },
        {
            id: 4,
            name: 'coso4',
            description: 'este es el producto 4',
            price: 1400
        }
    ]

export const GetProducts = () => {

  return (
    new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },2000)
        
    })
  )
}

export const GetItemById = (itemId) => {
     
    return (
        new Promise((resolve) => {
            setTimeout(()=>{
                resolve(products.fin(prod => prod.id === itemId))
            }, 2000)
        })
    )
}