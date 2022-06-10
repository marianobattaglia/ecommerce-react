const products = [
    { 
        id: '1', 
        name: 'AR00124', 
        price: 1850, 
        category: 'aros', 
        img:'./images/producto-1.jpg', 
        stock: 25, 
        description:'Aros Swarovski'
    },
    { 
        id: '2', 
        name: 'CJ05258', 
        price: 2350, category: 'conjuntos', 
        img:'./images/producto-2.jpg', 
        stock: 16, 
        description:'Conjunto corazón Cristal'
    },
    { 
        id: '3', 
        name: 'AR52422', 
        price: 1990, category: 'aros', 
        img:'./images/producto-3.jpg', 
        stock: 10, 
        description:'Argollitas con bolitas'
    },
    {
        id: '4', 
        name: 'AN12032', 
        price: 1250, category: 'anillos', 
        img:'./images/producto-4.jpg', 
        stock: 10, 
        description:'Anillo luna'
    },
    {
        id: '5', 
        name: 'AR02052', 
        price: 1250, category: 'aros', 
        img:'./images/producto-5.jpg', 
        stock: 10, 
        description:'Aros corazón Blanco'
    },
    {
        id: '6', 
        name: 'CJ10305', 
        price: 2150, category: 'conjuntos', 
        img:'./images/producto-6.jpg', 
        stock: 10, 
        description:'Conjunto ojo protector'
    }
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}