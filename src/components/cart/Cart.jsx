import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import swal from "sweetalert"
import "./Cart.css"
import CartItem from "../carItem/CartItem"
import { Button } from "@mui/material"

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext)

  const limpiar = () => {
    swal({
      title: "Seguro que quieres borrar todo el carrito?",
      text: "Una vez que lo hagas no podras recuperar la informacion!",
      icon: "warning",
      buttons: ["No", "Si"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Carrito borrado con exito!", {
          icon: "success",
          button: 'Done'
        })
        clearCart()
      } else {
        swal("Cancelaste la operacion")
      }
    })
  }

  return (
    <div className="cart-container">
      <div className="container-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-info">
        <h2>Descripcion del carrito:</h2>
        <h3>Cantidad de productos: </h3>
        <h3>Precio total: </h3>
        <h3>Descuento: </h3>
        <h3>Precio final: </h3>

        <div className="btn-cart">
          <Button variant="contained" color="secondary">Comprar</Button>
          <Button onClick={() => limpiar()} variant="contained" color="secondary">
            Vaciar carrito
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cart
