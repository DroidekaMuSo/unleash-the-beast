import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import swal from "sweetalert";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    addToCart({
      ...product,
      quantity: quantity,
    });

    swal({
      title: "Operacion Exitosa!",
      text: "Agregaste un producto al carrito!",
      icon: "success",
      button: "Ok",
    });
  };

  return (
    <div className={styles.containerItemDetail}>
      <div className={styles.containerImage}>
        <img src={product.img} alt={product.description} />
      </div>

      <div className={styles.containerDetail}>
        <h2>
          <span>Nombre:</span> {product.name}
        </h2>
        <h2>
          <span>Descripcion:</span> {product.description}
        </h2>
        <h2>
          <span>Precio:</span> ${product.price}
        </h2>

          <ItemCount onAdd={onAdd} stock={product.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
