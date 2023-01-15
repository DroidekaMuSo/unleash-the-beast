import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import styles from "./ItemDetail.module.css";
import Swal from "sweetalert2";

const ItemDetail = ({ product }) => {
  const { addToCart, getQuantityBiId } = useContext(CartContext);

  const onAdd = (quantity) => {
    addToCart({
      ...product,
      quantity: quantity,
    });
    Swal.fire({
      icon: "success",
      title: "Articulo agregado",
      text: "Vamos al carrito",
    });
  };

  const quantity = getQuantityBiId(product.id);
  console.log(quantity);

  return (
    <div className={styles.containerItemDetail}>
      <div className={styles.containerImage}>
        <img src={product.img} alt="" />
      </div>

      <div className={styles.containerDetail}>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Nombre:</span> {product.name}
        </h2>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Precio:</span> ${product.price}
        </h2>

        <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity} />
      </div>
    </div>
  );
};

export default ItemDetail;
