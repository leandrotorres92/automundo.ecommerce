import "./ItemDetail.css";
import Counter from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useNotification } from "../../notification/Notifications";

const ItemDetail = ({ id, name, img, price, description, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const setNotification = useNotification();

  const handleOnAdd = (quantity) => {
    setNotification("success", "Add to Cart");
    addItem({ id, name, price, quantity });
    setQuantityAdded(quantity);
  };

  return (
    <>
      <img src={img} alt={name} className="detailImgs" />
      <div>
        <h1 className="detailName">{name}</h1>
        <hr></hr>
        <div className="detailDescription">
          <h3>Descripcion</h3>
          <br></br>
          <p>{description}</p>
        </div>
        <span className="detailPrice">$ {price}</span>
        <footer>
          {quantityAdded === 0 ? (
            <Counter stock={stock} onAdd={handleOnAdd} />
          ) : (
            <Link className="buttonFinalizar" to="/cart">
              Finalizar Compra
            </Link>
          )}
        </footer>
        <h4>Unidades Disponibles: {stock}</h4>
      </div>
    </>
  );
};

export default ItemDetail;
