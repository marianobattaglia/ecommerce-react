const products = [
    { 
        id: '1', 
        cod: 'AR00124',
        name: 'Aros Swarovski', 
        price: 1850, 
        category: 'aros', 
        img:'./images/producto-1.jpg', 
        stock: 25, 
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis varius quam, vitae vehicula ligula molestie sit amet. Quisque et pharetra eros. Mauris condimentum sapien quis nisi posuere molestie. Aenean hendrerit odio et odio eleifend convallis. Etiam lobortis dictum augue at suscipit. Pellentesque viverra consequat erat, sit amet rutrum mi. Nam at fermentum elit, vitae consectetur ante. Integer at fermentum nibh. Vestibulum auctor ex vel ornare tristique. Integer sed dolor eleifend, consectetur felis lobortis, porta leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a eros ac velit sollicitudin porttitor et sed tellus. Pellentesque eu leo congue, eleifend nisl quis, iaculis nunc. Cras eget auctor arcu, ac mattis est. Duis at eleifend lacus, in laoreet purus.'
    },
    { 
        id: '2', 
        cod: 'CJ05258',
        name: 'Conjunto corazón Cristal', 
        price: 2350, 
        category: 'conjuntos', 
        img:'./images/producto-2.jpg', 
        stock: 16, 
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis varius quam, vitae vehicula ligula molestie sit amet. Quisque et pharetra eros. Mauris condimentum sapien quis nisi posuere molestie. Aenean hendrerit odio et odio eleifend convallis. Etiam lobortis dictum augue at suscipit. Pellentesque viverra consequat erat, sit amet rutrum mi. Nam at fermentum elit, vitae consectetur ante. Integer at fermentum nibh. Vestibulum auctor ex vel ornare tristique. Integer sed dolor eleifend, consectetur felis lobortis, porta leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a eros ac velit sollicitudin porttitor et sed tellus. Pellentesque eu leo congue, eleifend nisl quis, iaculis nunc. Cras eget auctor arcu, ac mattis est. Duis at eleifend lacus, in laoreet purus.'
    },
    { 
        id: '3', 
        cod: 'AR52422',
        name: 'Argollitas con bolitas', 
        price: 1990, category: 'aros', 
        img:'./images/producto-3.jpg', 
        stock: 10, 
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis varius quam, vitae vehicula ligula molestie sit amet. Quisque et pharetra eros. Mauris condimentum sapien quis nisi posuere molestie. Aenean hendrerit odio et odio eleifend convallis. Etiam lobortis dictum augue at suscipit. Pellentesque viverra consequat erat, sit amet rutrum mi. Nam at fermentum elit, vitae consectetur ante. Integer at fermentum nibh. Vestibulum auctor ex vel ornare tristique. Integer sed dolor eleifend, consectetur felis lobortis, porta leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a eros ac velit sollicitudin porttitor et sed tellus. Pellentesque eu leo congue, eleifend nisl quis, iaculis nunc. Cras eget auctor arcu, ac mattis est. Duis at eleifend lacus, in laoreet purus.'
    },
    {
        id: '4', 
        cod: 'AN12032',
        name: 'Anillo luna', 
        price: 1250, 
        category: 'anillos', 
        img:'./images/producto-4.jpg', 
        stock: 10, 
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis varius quam, vitae vehicula ligula molestie sit amet. Quisque et pharetra eros. Mauris condimentum sapien quis nisi posuere molestie. Aenean hendrerit odio et odio eleifend convallis. Etiam lobortis dictum augue at suscipit. Pellentesque viverra consequat erat, sit amet rutrum mi. Nam at fermentum elit, vitae consectetur ante. Integer at fermentum nibh. Vestibulum auctor ex vel ornare tristique. Integer sed dolor eleifend, consectetur felis lobortis, porta leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a eros ac velit sollicitudin porttitor et sed tellus. Pellentesque eu leo congue, eleifend nisl quis, iaculis nunc. Cras eget auctor arcu, ac mattis est. Duis at eleifend lacus, in laoreet purus.'
    },
    {
        id: '5', 
        cod: 'AR02052', 
        name: 'Aros corazón Blanco', 
        price: 1250, 
        category: 'aros', 
        img:'./images/producto-5.jpg', 
        stock: 10, 
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis varius quam, vitae vehicula ligula molestie sit amet. Quisque et pharetra eros. Mauris condimentum sapien quis nisi posuere molestie. Aenean hendrerit odio et odio eleifend convallis. Etiam lobortis dictum augue at suscipit. Pellentesque viverra consequat erat, sit amet rutrum mi. Nam at fermentum elit, vitae consectetur ante. Integer at fermentum nibh. Vestibulum auctor ex vel ornare tristique. Integer sed dolor eleifend, consectetur felis lobortis, porta leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a eros ac velit sollicitudin porttitor et sed tellus. Pellentesque eu leo congue, eleifend nisl quis, iaculis nunc. Cras eget auctor arcu, ac mattis est. Duis at eleifend lacus, in laoreet purus.'
    },
    {
        id: '6', 
        cod: 'CJ10305',
        name: 'Conjunto ojo protector', 
        price: 2150, category: 'conjuntos', 
        img:'./images/producto-6.jpg', 
        stock: 10, 
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis varius quam, vitae vehicula ligula molestie sit amet. Quisque et pharetra eros. Mauris condimentum sapien quis nisi posuere molestie. Aenean hendrerit odio et odio eleifend convallis. Etiam lobortis dictum augue at suscipit. Pellentesque viverra consequat erat, sit amet rutrum mi. Nam at fermentum elit, vitae consectetur ante. Integer at fermentum nibh. Vestibulum auctor ex vel ornare tristique. Integer sed dolor eleifend, consectetur felis lobortis, porta leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a eros ac velit sollicitudin porttitor et sed tellus. Pellentesque eu leo congue, eleifend nisl quis, iaculis nunc. Cras eget auctor arcu, ac mattis est. Duis at eleifend lacus, in laoreet purus.'
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