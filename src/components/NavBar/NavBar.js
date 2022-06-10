import './NavBar.css'
import Button from '../Button/Button'
import CartWidget from './CartWidget/CartWidget'
import Logo from './Logo/Logo'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <div>
            <div className='navSuperior'>
                <Logo/>
                <CartWidget/>
            </div>
            <nav>
            <div className="Categories">
          {/* <Link to='/category/celular' className='Option'>Celular</Link>
          <Link to='/category/tablet' className='Option'>Tablet</Link>
          <Link to='/category/notebook' className='Option'>Notebook</Link> */}
        </div>
        <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Todos los productos</NavLink>
          <NavLink to='/category/aros' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Aros</NavLink>
          <NavLink to='/category/pulseras' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pulseras</NavLink>
          <NavLink to='/category/tobilleras' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tobilleras</NavLink>
          <NavLink to='/category/anillos' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Anillos</NavLink>
          <NavLink to='/category/cadenas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Cadenas</NavLink>
          <NavLink to='/category/conjuntos' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Conjuntos</NavLink>

                {/*
                    <Button label='Aros'/>
                    <Button label='Pulseras'/>
                    <Button label='Tobilleras'/>
                    <Button label='Anillos'/>
                    <Button label='Cadenas'/>
                    <Button label='Conjuntos'/>
    */}
            </nav>
       </div>
    )
}

export default NavBar