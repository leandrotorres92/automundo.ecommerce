import "./Cartwidget.css";
import logocar from "../CartWidget/logo_cart.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  
  return (
    <Link to="/Cart" className="btnCarrito">
      <img src={logocar} alt="CartImg" />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
