import React from "react";
import Product from "./Product";
import "./Main.css";

export default function Main(props){
    const{products,onAdd} = props;
    return (
        <main className="main">
            
            <div className="producto">
                {products.map((product)=>(
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    );
}