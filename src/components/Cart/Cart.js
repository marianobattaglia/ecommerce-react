/*
import { useState } from 'react' 
import { Button, Flex, Text, Box, Spinner } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

import CartItem from '../CartItem/CartItem'

import { CartContext } from "../../context/CartContext"
import { CartProvider } from '../../context/CartContext'

//import { useOrders } from "services/firebase/firestore/orders"

const Cart = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const navigate = useNavigate()
    const { cart, totalQuantity } = CartProvider()

    
    //const { createOrder } = useOrders()

/*     const handleCreateOrder = () => {
        setLoading(true)

        createOrder().then(response => {
            console.log(response)
            if(response.result === 'orderCreated') {
                clearCart()
                setOrderId(response.id)
            }
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }
 */

    /*
    if(loading) {
        return (
            <Flex height='100%' flexDirection='column' justifyContent='center'>
                <Spinner />
            </Flex>
        )
    }
    */

    /*
    if(orderId !== '') {
        return (
            <Flex flexDirection='column' justifyContent='space-between' alignItems='center' height='100%' p={50}>
                <Box>
                    <Text fontSize='3xl'>Your Order-Id is: {orderId}. Contact us for shipping</Text>
                    <Button
                        variant="solid" 
                        size="md" 
                        backgroundColor="#eeeeee"
                        //onClick={() => navigate(`/profile/${user.uid}/orders`)}
                    >
                        Orders
                    </Button>
                </Box>
                <Flex flexDirection='column'>
                    <Text fontSize='3xl'>Check our products...</Text>
                    <Button
                        variant="solid" 
                        size="md" 
                        backgroundColor="#eeeeee"
                        onClick={() => navigate('/')}
                    >
                        Products
                    </Button>
                </Flex>
            </Flex>
        )
    }*/

    /*
    if(!totalQuantity) {
        return (
            <Flex flexDirection='column' justifyContent='space-between' alignItems='center' height='100%' p={50}>
                <Box>
                    <Text fontSize='3xl'>Your cart is empty</Text>
                </Box>
                <Flex flexDirection='column'>
                    <Text fontSize='3xl'>Check our products...</Text>
                    <Button
                        variant="solid" 
                        size="md" 
                        backgroundColor="#eeeeee"
                        onClick={() => navigate('/')}
                    >
                        Products
                    </Button>
                </Flex>
            </Flex>
        )
    } 

    return (
        <Flex flexDirection='column' justifyContent='space-between' alignItems='center' height='100%' p={50}>
            <Text fontSize='3xl' mb={20}>Your cart</Text>
            <Flex flexDirection='column' height='100%'>
                {cart.map(prod => <CartItem key={prod.id} {...prod}/>)}
            </Flex>
            <Flex flexDirection='column' justifyContent='space-between' alignItems='center' height='100%'>
                <Text fontWeight={800} fontSize={'3xl'}>
                    Total: $ ...
                </Text>
                <Button
                        variant="solid" 
                        size="lg" 
                        backgroundColor="#aaeeee"
                        //onClick={handleCreateOrder}
                >
                    Create Order
                </Button>
            </Flex>
        </Flex>
    )
}

export default Cart
*/

import React from 'react'
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './Cart.css'

const Cart = () => {
    const { cart, emptyCart, getItemPrice, deleteItem, getItemQty } = useContext(CartContext)

    const purchaseAlert = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            iconColor: "#00A300",
            title: `Ha comprado ${getItemQty()} productos`,
            showConfirmButton: false,
            timer: 2500,
        });
    }

    const emptyCartAlert = () => {
        Swal.fire({
            toast: true,
            position: "bottom-end",
            icon: "success",
            iconColor: "#374151",
            title: "Carrito vacío",
            showConfirmButton: false,
            timer: 2500,
            showClass: {
                popup: 'animate__animated animate__fadeInUp'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutDown'
            }
        });
    }


    return (
        <>
            <section className='container'>
                <h2 className='text-center py-5'>Carrito de compras</h2>
                {cart.length > 0 &&
                    <div className='text-center d-flex justify-content-center align-items-center'>
                        <div className='row container justify-content-center align-items-center'>
                            <div className='col-2'></div>
                            <div className='col-4 text-center'>
                                <p className='h6'>PRODUCTOS</p>
                            </div>
                            <div className='col-2 text-center'>
                                <p className='h6'>CANTIDAD</p>
                            </div>
                            <div className='col-2 text-center'>
                                <p className='h6'>PRECIO</p>
                            </div>
                            <div className='col-2 text-center'>
                                <p className='h6'>TOTAL</p>
                            </div>
                        </div>
                    </div>
                }
                {cart.map((e, index) => (
                    <>
                        <div key={index} className='text-center d-flex justify-content-center align-items-center py-3 item-cart'>
                            <div className='row container justify-content-center align-items-center'>
                                <div className='col-6 d-flex'>
                                    <div className='row d-flex'>
                                        <div className='col-4 cart-img-container'>
                                            <img src={e.img} className='cart-img'></img>
                                        </div>
                                        <div className='col-8'>
                                            <p className='text-center cart-title'>{e.name}</p>
                                            <button className='btn btn-secondary btn-sm' onClick={() => deleteItem(e.id)}>Eliminar producto</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <p className='text-center'>{e.qty}</p>
                                </div>
                                <div className='col-2'>
                                    <p className='text-center'>${e.price}</p>
                                </div>
                                <div className='col-2'>
                                    <p className='text-center'>${e.qty * e.price}</p>
                                </div>
                            </div>

                        </div>
                    </>
                ))}
            </section>

            {cart.length > 0 ?
                <div className='text-center py-5'>
                    <button className='btn btn-secondary btn-sm mx-2' onClick={() => {
                        emptyCart()
                        emptyCartAlert()
                    }}>Vaciar carrito</button>
                    <button className='btn btn-secondary btn-sm mx-2' onClick={() => {
                        purchaseAlert()
                        emptyCart()
                    }}>Finalizar compra</button>
                    <p className='text-center'>PRECIO TOTAL ${getItemPrice()}</p>
                </div> :
                <div className='text-center'>
                    <p>NO HAY PRODUCTOS</p>
                    <Link to={'/'}><button className='btn btn-secondary btn-sm'>Volver a la tienda</button></Link>
                </div>

            }

        </>
    )
}

export default Cart