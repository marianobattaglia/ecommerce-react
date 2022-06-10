import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, description, img, price, stock }) => {
    return (
        <li className='item'>
            <img src={img} alt={name}/>
            <h3>{description}</h3>
            <h4>Cod. {name}</h4>
            <h3>$ {price}</h3>
            <h5>Stock: {stock} unidades</h5>
            
            <button>Comprar</button>
            <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
        </li>
    )
}

export default Item