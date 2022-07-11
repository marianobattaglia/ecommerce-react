import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, cod, name, img, price, stock }) => {
    return (
        <li className='item'>
            <img src={'.' + img} alt={name}/>
            <h3>{name}</h3>
            <h4>Cod. {cod}</h4>
            <h3>$ {price}</h3>
            <h5>Stock: {stock} unidades</h5>
            
            <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
        </li>
    )
}

export default Item