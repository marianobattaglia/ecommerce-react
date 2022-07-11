import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from './Logo/Logo'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <div>
            <div className='navSuperior'>
                <Logo/>
                <CartWidget/>
            </div>
            <nav>
            
            <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Todos los productos</NavLink>
            <NavLink to='/category/aros' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Aros</NavLink>
            <NavLink to='/category/pulseras' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pulseras</NavLink>
            <NavLink to='/category/tobilleras' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tobilleras</NavLink>
            <NavLink to='/category/anillos' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Anillos</NavLink>
            <NavLink to='/category/cadenas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Cadenas</NavLink>
            <NavLink to='/category/conjuntos' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Conjuntos</NavLink>
            
            </nav>
       </div>
    )
}

export default NavBar