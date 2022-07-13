import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  const { productId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", productId);
    getDoc(docRef).then((doc) => {
      const productFormatted = { id: doc.id, ...doc.data() };
      setProduct(productFormatted);
    });
  }, [productId]);

  return (
    <div className="detailProductsContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
