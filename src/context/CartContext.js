import { useState, useEffect, createContext } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    console.log(cart)


    useEffect(() => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        setTotalQuantity(totalQuantity)
    }, [cart])
  
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
      }
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id) 
        setCart(cartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    // const getCartQuantity = () => {
    //     let totalQuantity = 0

    //     cart.forEach(prod => {
    //         totalQuantity += prod.quantity
    //     })

    //     return totalQuantity
    // }

        const getItemQty = () => {
            return cart.reduce((acc, x) => acc += x.quantity, 0)
        }
    
        const getItemPrice = () => {
            return cart.reduce((acc, x) => acc += x.quantity * x.price, 0)
        }    

    return (
        <CartContext.Provider value={{ 
            cart,
            totalQuantity, 
            addItem,
            removeItem,
            isInCart,
            clearCart,
            getItemQty,
            getItemPrice
            // getCartQuantity
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext
