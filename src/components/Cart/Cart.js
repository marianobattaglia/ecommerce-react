
import React from 'react'
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './Cart.css'

const Cart = () => {
    const { cart, emptyCart, getItemPrice, deleteItem, getItemQty, clearCart } = useContext(CartContext)

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

        <div className='containerCarrito'>
        <section className='container'>
        <h2 className='tituloCarrito'>Carrito de compras</h2>
            {cart.length > 0 &&
                <div className='contenedorTabla'>
                    <div className='tituloTabla'>
                        <h3>Productos</h3>
                        <h3>Cantidad</h3>
                        <h3>Precio</h3>
                        <h3>Total</h3>
                    </div>
                    {cart.map((e, index) => (
                        <>
                        <div className='itemsTabla'>
                            <h5>{e.name}</h5>
                            <h5>{e.quantity}</h5>
                            <h5>{e.price}</h5>
                            <h5>{e.price * e.quantity}</h5>
                        </div>
                        {/*
                        <table>
                            <tr>
                                <th>Productos</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.quantity}</td>
                                <td>{e.price}</td>
                                <td>{e.price * e.quantity}</td>
                            </tr>
                        </table>
                        */}
                        </>
                    ))}

                </div>
            }
        </section>

        {cart.length > 0 ?
            <div className='contenedorButtons'>
                <p className='totalPrice'>Precio total: ${getItemPrice()}</p>
                <button className='clearButton' onClick={() => {
                    clearCart()
                    emptyCartAlert()
                }}>Vaciar carrito</button>
                <button className='buyButton' onClick={() => {
                    purchaseAlert()
                    clearCart()
                }}>Finalizar compra</button>
            </div> :
            <div className='contenedorCarritoVacio'>
                <p>NO HAY PRODUCTOS</p>
                <Link to={'/'}><button className='backIndexButton'>Volver a la tienda</button></Link>
            </div> 
        }
        </div> 
                
        </>
    )
}

export default Cart