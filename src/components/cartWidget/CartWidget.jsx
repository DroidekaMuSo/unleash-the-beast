// rafce --> export default || rafc --> export nombrado

import { useContext } from "react";
import "./CartWidget.css";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container-cart">
      <Link to="/cart">
        <ShoppingBasketRoundedIcon
          style={{
            fontSize: "3rem",
            color: "#ff33cc",
          }}
        />
        <div className="bubble-counter">
          <span>{cart.length}</span>
        </div>
      </Link>
    </div>
  );
};
