import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Button, FormControl, TextField } from "@mui/material";

const Form = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({ name: "", phone: "", email: "" });
  const total = getTotalPrice();
  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      buyer: userData,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((res) => setOrderId(res.id));
    cart.map((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });
    clearCart();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{width:'30rem'}}
      >
        <TextField
          label="Ingrese su nombre"
          variant="standard"
          name="name"
          type="text"
          value={userData.name}
          onChange={(event) =>
            setUserData({ ...userData, name: event.target.value })
          }
          color="secondary"
          fullWidth
          style={{ marginBottom: "1rem" }}
        />

        <TextField
          label="Ingrese su telefono"
          type="tel"
          variant="standard"
          name="number"
          value={userData.phone}
          onChange={(event) =>
            setUserData({ ...userData, phone: event.target.value })
          }
          color="secondary"
          fullWidth
          style={{ marginBottom: "1rem" }}
        />

        <TextField
          label="Ingrese su email"
          type="email"
          variant="standard"
          name="email"
          value={userData.email}
          onChange={(event) =>
            setUserData({ ...userData, email: event.target.value })
          }
          color="secondary"
          fullWidth
          style={{ marginBottom: "1rem" }}
        />
        <Button type="submit" color="secondary" fullWidth variant="contained">
          Finalizar compra
        </Button>
      </form>
    </div>
  );
};

export default Form;
