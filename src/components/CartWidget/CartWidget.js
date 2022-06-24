/*import Button from '../../Button/Button'

const CartWidget = () => {
    return (
    <div>
    <Button label='Ver Carrito'/>
    </div>
    )
}

export default CartWidget*/


import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const { getCartQuantity, totalQuantity } = useContext(CartContext)

    return(
        <div className="CartWidget">
            <img src="/images/cart.svg" alt='cart' className='CartImg'/>
            { totalQuantity }
        </div>
    );
}

export default CartWidget


/* import {     
    Icon,
    Flex,
    Button,
    Text
} from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'

import { useCart } from '../../context/CartContext';

const CartWidget = () => {
    const navigate = useNavigate()

    const { totalProductsAdded } = useCart()

    return (
        <Button variant="solid" size="md" backgroundColor="#aaeeee" onClick={() => navigate('/cart')}>
            <Flex justifyContent='center' alignItems='center'>
                <Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} mr={3}/>
                <Text fontSize='lg'>{ totalProductsAdded }</Text>
            </Flex>
        </Button>
    )
}

export default CartWidget */