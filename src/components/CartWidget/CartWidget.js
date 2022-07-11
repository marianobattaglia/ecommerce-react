import './CartWidget.css'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const { getCartQuantity, totalQuantity } = useContext(CartContext)

    return(
        <div className="CartWidget">
            <NavLink className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} to='/Cart'>
                <img src="/images/cart.svg" alt='cart' className='CartImg'/>
                { totalQuantity }
            </NavLink>
        </div>
    );
}

export default CartWidget