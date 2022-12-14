import { Button } from "@mui/material"
import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [counter, setCounter] = useState(initial)

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > initial) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="container-btn">
      <h2>Cantidad: <span>{counter}</span></h2>
      <div className="btns">
        <Button variant="outlined" color='secondary' onClick={increment}>
          +
        </Button>
        <Button variant="contained" color='secondary' onClick={() => onAdd(counter)}>
          Agregar al carrito
        </Button>
        <Button variant="outlined" color='secondary' onClick={decrement}>
          -
        </Button>
      </div>
    </div>
  )
}

export default ItemCount

