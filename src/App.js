//Importaciones
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Context

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<FormikFormulario />} />
        <Route path="*" element={<h2>Lo siento esta url no existe</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
