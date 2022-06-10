import './ItemDetail.css'

const ItemDetail = ({ id, cod, name, price, category, img, stock, description }) => {
    return (
        <>
            {/*<h2>Card de detalle</h2>*/}
            <div className='itemDetailContainer'>
            <h1>{name}</h1>
            <h5>Cod. {cod}</h5>
            <img src={process.env.PUBLIC_URL + img} alt={name} />
            <h4>{description}</h4>
            <h3>Precio: $ {price}</h3>
            <h5>o 12 cuotas de $ {price/12}</h5>
            <h4>Stock disponible: {stock}</h4>
            </div>
        </>
    )
}

export default ItemDetail