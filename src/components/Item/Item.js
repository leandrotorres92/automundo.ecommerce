import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, origin, price }) => {
  return (
    <div className="cards">
      <img src={img} alt={name} className="imgs" />
      <div className="namecar">{name}</div>
      <div className="origin">{origin}</div>
      <span className="price">$ {price}</span>
      <div className="seedetail">
        <Link className="seedetail_link" to={`/detail/${id}`}>Ver Detalles</Link>
      </div>
    </div>
  );
};

export default Item;
