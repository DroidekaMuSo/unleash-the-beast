import { useState } from "react";
import "./Form.css";
import { Button } from "@mui/material";

const Form = () => {
  const [userData, setUserData] = useState({ name: "", lastName: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  };

  const handleKey = (event) => {
    if (event.key !== " ") {
      console.log(event.key);
    } else {
      event.preventDefault();
    }
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          value={userData.name}
          onChange={(event) =>
            setUserData({ ...userData, name: event.target.value })
          }
          onKeyDown={handleKey}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="lastName"
          onChange={(event) =>
            setUserData({ ...userData, lastName: event.target.value })
          }
          value={userData.lastName}
        />

        <input
          type="number"
          placeholder="Celular"
          name="phoneNumber"
          onChange={(event) =>
            setUserData({ ...userData, phoneNumber: event.target.value })
          }
          value={userData.phoneNumber}
        />

        <input
          type="text"
          placeholder="Calle"
          name="streetName"
          onChange={(event) =>
            setUserData({ ...userData, streetName: event.target.value })
          }
          value={userData.streetName}
        />

        <input
          type="text"
          placeholder="Colonia"
          name="neighborhood"
          onChange={(event) =>
            setUserData({ ...userData, neighborhood: event.target.value })
          }
          value={userData.neighborhood}
        />

        <input
          type="text"
          placeholder="Estado"
          name="state"
          onChange={(event) =>
            setUserData({ ...userData, state: event.target.value })
          }
          value={userData.state}
        />

        <input
          type="text"
          placeholder="Codigo Postal"
          name="cp"
          onChange={(event) =>
            setUserData({ ...userData, cp: event.target.value })
          }
          value={userData.cp}
        />

        <div className="btn">
          <Button variant="contained" color="secondary">Enviar</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;

// FORMIK y YUP
