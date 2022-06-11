import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncmocks"
import Item from "../Item/Item"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        if(!categoryId) {
            getProducts().then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId).then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }
        
    }, [categoryId])

    if(loading) {
        return <h1>Espere por favor...</h1>
    }

    return(
        <div>
            {/*<h1>{props.saludo}</h1>*/}
            {products.length > 0 ? <ItemList products={products}/> : <h1>Disculpe, no tenemos productos para esa categoría.</h1>}
            
        </div>
    )
}

export default ItemListContainer