import { useContext } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container-cart">
      <Link to="/cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "#137031",
          }}
        />
        <div className="bubble-counter">
          <span>{cart.length}</span>
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
