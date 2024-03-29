import  {ItemDetailContainer, ItemListContainer}  from "./container";
import Navbar from "./container/navBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import CartContextProvider from "./context/CartContext";
import Form from "./components/form/Form";


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Form />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h2>Lo siento esta url no existe</h2>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
