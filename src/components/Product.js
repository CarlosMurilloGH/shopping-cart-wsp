import React from 'react';
import "./Product.css";

export default function Product(props) {
    const {product,onAdd} = props;
    return (
        <div className="productcards">
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>
                S/.{product.price}
            </div>
            <div>
                <button onClick={()=> onAdd(product)}>Añadir al carrito</button>
            </div>
        </div>
    )
}
