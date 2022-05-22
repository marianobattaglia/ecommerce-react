import Button from '../Button/Button'
import CartWidget from './CartWidget/CartWidget'
import Logo from './Logo/Logo'

const NavBar = () => {
    return(
        <div>
            <div className='navSuperior'>
                <Logo/>
                <CartWidget/>
            </div>
            <nav>
                    <Button label='Aros'/>
                    <Button label='Pulseras'/>
                    <Button label='Tobilleras'/>
                    <Button label='Anillos'/>
                    <Button label='Cadenas'/>
                    <Button label='Conjuntos'/>
            </nav>
       </div>
    )
}

export default NavBar