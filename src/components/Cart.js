import React,{useEffect,useState} from "react";

export default function Cart(props){

    const {cartItems,onAdd,onRemove}=props;
    const itemsPrice=cartItems.reduce((a,c)=>a+c.price*c.qty,0);
    

    const [string,setString]=useState("");
    useEffect(()=>{
        const string=`Hola%2C+vengo+de+la+app+de+carlos+y+quiero+comprar%3A%0D%0A%0D%0A${cartItems.map(item=>`*${item?.name}* *=* *${item?.price}* *x* *${item?.qty}* `)}%0D%0A*Precio:${itemsPrice}*%2F%0D%0A%0D%0AGracias%21`;
        setString(string);
        //eslint-disable-next-line
    },[cartItems]);
   

    return (
        <aside className="block col-1">
            <h2>Carrito</h2>
            
            <div>
                {cartItems.length === 0 && <div>El carrito está vacio </div>}
            </div>
            {
                cartItems.map((item)=>(
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}</div>
                        <div>
                            <button onClick={()=>onAdd(item)} className="add">+</button>
                            <button onClick={()=>onRemove(item)} className="add">-</button>
                        </div>
                        <div className="col-2 text-right">
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))
            }
            {cartItems-cartItems.length !==0&&(
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Precio total</div>      
                        <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        <a target="_blank" rel="noreferrer" href={`https://web.whatsapp.com/send?phone=51956348183&text=hola` }>
                        <button >Enviar pedido</button>
                        </a>
                    </div>  
                </>
                               
            )}
           
        </aside>

    );
}

