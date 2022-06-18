import '../../App.css'
import { useState, useEffect} from 'react'
import { getProductById } from '../../asyncmocks'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc => {
            const productFormatted = { id: doc.id, ...doc.data() }
            setProduct(productFormatted)
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false)
        })
//        getProductById(productId).then(response => {
//            setProduct(response)
//        })
    }, [productId])

    if(loading) {
        
    }

    return (
        <div className='containerItemDetailContainer'>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer