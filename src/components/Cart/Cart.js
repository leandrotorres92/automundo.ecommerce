import "./Cart.css";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import CartItemList from "../CartItemList/CarItemList";
import { Link } from "react-router-dom";

const Cart = () => {
  const [loading, setLoading] = useState(false);

  const { cart, totalQuantity, total, clearCart } = useContext(CartContext);

  const handleCreateOrder = () => {
    setLoading(true);
    if (loading) {
      return <h1 className="cartTittle">Se esta generando su orden...</h1>;
    }
  };

  if (totalQuantity === 0) {
    return <h1 className="cartTittle">No hay productos en la lista...</h1>;
  }
  
  return (
    <div className="containerCart">
      <h1 className="cartTittle">Su cotizacion</h1>
      <div className="containerCartItems">
        <CartItemList productsAdded={cart} />
      </div>
      <div className="totalCart">
        <p>Total: $ {total}</p>
      </div>
      <button className="buttonClear" onClick={() => clearCart()}>
        Clear Cart
      </button>
      <Link
        className="buttonCreateorder"
        onClick={() => handleCreateOrder()}
        to="/checkout"
      >
        Create Order
      </Link>
    </div>
  );
};
export default Cart;
