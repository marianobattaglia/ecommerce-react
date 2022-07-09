
import React from 'react'
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import CartCheckout from '../CartCheckout/CartCheckout';
import './Cart.css'

const Cart = () => {
    const { cart, getItemPrice, removeItem, getItemQty, clearCart } = useContext(CartContext)

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
                <div> 
                    {/*Product table container*/}
                    <div className='contenedorTabla'>
                        <h2>Detalle de su compra:</h2>
                        <div className='tituloTabla'>
                            <h3>Productos</h3>
                            <h3>Cantidad</h3>
                            <h3>Precio</h3>
                            <h3>Total</h3>
                            <h3> </h3>
                        </div>
                    
                    {cart.map((e, index) => (
                        <>
                        <div className='itemsTabla'>
                            <h5>{e.name}</h5>
                            <h5>{e.quantity}</h5>
                            <h5>{e.price}</h5>
                            <h5>{e.price * e.quantity}</h5>
                            <button className='delete-btn' onClick={() => removeItem(e.id)}> <img src="/images/delete.svg" alt='delete' className='DeleteImg'/> Eliminar </button>
                        </div>
                        </>
                    ))}
                    <div className='cartPrice'>
                        <h3>Precio total: ${getItemPrice()}</h3>
                    </div>
                    <div className='buttonContainer'>
                        <button className='clearButton' onClick={() => {
                            clearCart()
                            emptyCartAlert()
                        }}>Vaciar carrito</button>
                    </div>
                    </div>

                    <CartCheckout />
                </div>
            }
        </section>

        {cart.length > 0 ?
            <div></div> :
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