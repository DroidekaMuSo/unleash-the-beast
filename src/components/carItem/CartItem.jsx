import React,{ useContext } from "react"
import { Button } from "@mui/material"
import { CartContext } from "../../context/CartContext"
import "./CartItem.css"

const CartItem = ({ item }) => {
  const { deleteProductById } = useContext( CartContext )
  return (
    <div key={item.id} className="cart-item">
      <img src={item.img} alt="" />
      <div className="cart-item-info">
        <h2>{item.name}</h2>
        <h2>${item.price}.00</h2>
        <h2>Unidades: {item.quantity}</h2>
      </div>
      <Button variant="contained" color="secondary" sx={{marginLeft:'1.5rem'}} onClick={()=>deleteProductById(item.id)}>Quitar</Button>
    </div>
  )
}

export default CartItem
