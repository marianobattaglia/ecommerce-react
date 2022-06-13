import '../../App.css'
import { useState, useEffect} from 'react'
import { getProductById } from '../../asyncmocks'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        })
    }, [productId])

    return (
        <div className='containerItemDetailContainer'>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer