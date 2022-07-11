import './ItemListContainer.css'
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ? (
            //Filtrado de productos
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : ( collection(db, 'products') )

        getDocs(collectionRef).then(response => {
            const productsFormatted = response.docs.map(doc => {
                return { id: doc.id,  ...doc.data() }
            })
            setProducts(productsFormatted)
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false)
        })
        
    }, [categoryId])

    if(loading) {
        return <h1>Espere por favor...</h1>
    }

    return(
        <div>
            {products.length > 0 ? <ItemList products={products}/> : <h1>Disculpe, no tenemos productos para esa categoría.</h1>}
        </div>
    )
}

export default ItemListContainer