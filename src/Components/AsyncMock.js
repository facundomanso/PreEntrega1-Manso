
    const products = [
        {
            id: 1,
            category: 'vege',
            name: 'Broccoli',
            description: 'Nutritious green veggies, packed with vitamins, fiber, and antioxidants. Supports immunity, aids digestion',
            price: '5/each'
        },
        {
            id: 2,
            category: 'vege',
            name: 'Red Capsicums',
            description: 'Colorful vegetables rich in vitamins, fiber, and antioxidants. Supports immunity, aids digestion',
            price: '4/each'
        },
        {
            id: 3,
            name: 'Carrots',
            category: 'vege',
            description: 'Nutritious orange root vegetables, high in vitamins and antioxidants. Promotes healthy vision, boosts immune system',
            price: '25/kg'
        },
        {
            id: 4,
            name: 'Tomatoes',
            category: 'vege',
            description: 'Juicy red fruits packed with vitamins, especially vitamin C and lycopene, a powerful antioxidant. Promote heart health, support skin health.',
            price: '15/kg'
        },
        {
            id: 5,
            name: 'Potatoes',
            category: 'vege',
            description: 'Starchy tuber with a variety of types like russet, red, or sweet potatoes. Rich in carbohydrates, potassium, and vitamin C. Versatile for cooking - boil, bake, fry, or mash.',
            price: '7/kg'
        },
        {
            id: 6,
            name: 'Apples',
            category: 'fruit',
            description: 'Crisp and sweet fruits available in numerous varieties like Gala, Granny Smith, or Red Delicious. High in fiber, vitamin C, and antioxidants. Promote heart health and aid digestion. ',
            price: '6/kg'
        },
        {
            id: 7,
            name: 'Oranges',
            category: 'fruit',
            description: 'Citrus fruits known for their refreshing and tangy flavor. Rich in vitamin C, fiber, and antioxidants. Boost immune system, support skin health.',
            price: '5.5/kg'
        },
        {
            id: 8,
            name: 'Kiwis',
            category: 'fruit',
            img: 'https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg',
            description: ' Small, green, and tangy fruits with a fuzzy brown exterior. Packed with vitamin C, vitamin K, and dietary fiber. Support immune function and aid digestion. ',
            price: '15/kg'
        },
        {
            id: 9,
            name: 'Bananas',
            category: 'fruit',
            description: 'Curved, yellow fruits with a creamy texture. Excellent source of potassium, vitamin B6, and fiber. Promote heart health and provide a quick energy boost. ',
            price: '7.5/kg'
        }
        ,
        {
            id: 10,
            name: 'Almonds',
            category: 'nut',
            description: ' Nutritious tree nuts with a crunchy texture. Rich in healthy fats, protein, vitamin E, and magnesium. Support heart health and may help lower cholesterol.',
            price: '17.5/kg'
        }
        ,
        {
            id: 11,
            name: 'Pistachios',
            category: 'nut',
            description: 'Small, green nuts with a slightly sweet and nutty flavor. Packed with protein, healthy fats, and fiber. Promote heart health and weight management.',
            price: '19.2/kg'
        },
        {
            id: 12,
            name: 'Cashew Nuts',
            category: 'nut',
            description: 'Creamy, kidney-shaped nuts with a buttery taste. Rich in healthy fats, protein, and essential minerals like zinc and magnesium. Support heart health and aid in brain function.',
            price: '21/kg'
        },
        {
            id: 13,
            name: 'Hazel Nuts',
            category: 'nut',
            description: 'Small, round nuts with a sweet, rich flavor. High in healthy fats, vitamins, and minerals like vitamin E and manganese. Support heart health and provide antioxidants.',
            price: '17.6/kg'
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
                resolve(products.find(prod => prod.id === parseInt(itemId)))
            }, 2000)
        })
    )
}

export const GetItemByCategory = (itemCategory) => {
     
    return (
        new Promise((resolve) => {
            setTimeout(()=>{
                resolve(products.filter(prod => prod.category === itemCategory))
            }, 2000)
        })
    )
}