import './ItemDetail.css'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, cod, name, price, category, img, stock, description }) => {
    
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${name}`)
        addItem({ id, name, price, quantity})
        setQuantityAdded(quantity)
    }
    
    return (
        <>
            {/*<h2>Card de detalle</h2>*/}
            <div className='itemDetailContainer'>
                <header className='detailHeader'>
                    <div className='detailImage'>
                        <img src={'.' + img} alt={name} />
                    </div>
                    <div className='detailInfo'>
                        <h1>{name}</h1>
                        <h5>Cod. {cod}</h5>
                        <h3>Precio: $ {price}</h3>
                        <h5>12 cuotas sin interes de $ {price/12}</h5>
                        <h4>Stock disponible: {stock} unidades.</h4>
                        {/*<button>Agregar al carrito</button>*/}
                        <footer className='ItemFooter'>
                        { quantityAdded === 0 
                            ?  <ItemCount stock={stock} onAdd={handleOnAdd} />
                            :  <Link to='/cart'>Terminar compra</Link>
                        }
                        </footer>
                    </div>
                </header>
                <footer className='detailDescription'>
                    <h3>Descripcion:</h3>
                    <h4>{description}</h4>
                </footer>
                
                
                
            </div>
        </>
    )
}

export default ItemDetail