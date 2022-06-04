import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmocks"
import Item from "../Item/Item"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).catch((error) => {
            console.log(error);
        })
    })

    return(
        <div>
            {/*<h1>{props.saludo}</h1>*/}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer