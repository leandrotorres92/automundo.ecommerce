import "./Itemlist.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="containerCards">
      {products.map((carprod) => (
        <Item key={carprod.id} {...carprod} />
      ))}
    </div>
  );
};

export default ItemList;
