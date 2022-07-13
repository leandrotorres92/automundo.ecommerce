import "./CartItem.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartItem = ({ id, name, quantity, price }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = (id) => {
    removeItem(id);
  };

  return (
    <div className="containerCartItem">
      <div className="cartItem">
        <div className="cartItemElements">
          <h2>{name}</h2>
        </div>
        <div className="cartItemElements">
          <p>Cantidad: {quantity}</p>
        </div>
        <div className="cartItemElements">
          <p>Precio por Unidad: $ {price}</p>
        </div>
        <div className="cartItemElements">
          <p>SubTotal: $ {price * quantity}</p>
        </div>
        <div className="cartItemButton">
          <button
            className="cartItemButton_remove"
            onClick={() => handleRemove(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
