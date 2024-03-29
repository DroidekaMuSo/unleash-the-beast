import React from "react"
import "./ItemList.css"
import { Item } from "../../components"

const ItemList = ({ items }) => {
  return (
    <div className="container-cards">
      {items.map((element) => {
        return <Item key={element.id} element={element} />
      })}
    </div>
  )
}

export default ItemList
