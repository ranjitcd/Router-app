import React, { useState, useEffect } from 'react'
import '../App.css';


function Shop() {
  useEffect(() =>{
    fetchItems();
  },[])

  const [items,setItems] = useState([])

    const fetchItems = async () =>{
        const dataa = await fetch('https://fortnite-api.theapinetwork.com/store/get')
        const items = await dataa.json();
        console.log(items);
        setItems(items);
    }
  return (
    <div className="App">
    {items.map((item) =>(
      <h1 key={item.itemId}>{item.name}</h1>
    ))}
    </div>
  );
}

export default Shop;
