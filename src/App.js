import React, { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";
import "./App.css";

function App() {
  
  const{products} =data;
  const [cartItems,setCartItems]=useState([]);
  const onAdd= (product) =>{
    const exist= cartItems.find(x =>x.id === product.id)
    if(exist){
      setCartItems(cartItems.map(x=>x.id === product.id ? {...exist,qty:exist.qty+1} : x))
    }else {
     setCartItems([...cartItems,{...product, qty:1}]) 
    }
  }

  const onRemove=(product) =>{
    const exist=cartItems.find((x)=> x.id === product.id)
    if(exist.qty ===1){
      setCartItems(cartItems.filter((x)=>x.id !== product.id))
    }else{
      setCartItems(cartItems.map(x=>x.id === product.id ? {...exist,qty:exist.qty-1} : x))
    }
  }
  
  return (
    <div className="App">
      <Header>

      </Header>
      <div className="Appcontainer">
        <Main onAdd={onAdd} products={products}></Main>

        
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} ></Cart>

        
      </div>
      <Footer />
    </div>
  );
}

export default App;
