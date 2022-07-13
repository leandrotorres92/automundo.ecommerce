import "./Checkout.css";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { useNotification } from "../../notification/Notifications";
import {
  addDoc,
  collection,
  writeBatch,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../services/firebase/index";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const { cart, total, clearCart } = useContext(CartContext);  

  const setNotification = useNotification();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const handleCreateForm = () => {
    setLoading(true);

    const objOrder = {
      buyer: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: values.address,
      },
      items: cart,
      total: total,
    };

    const batch = writeBatch(db);

    const ids = cart.map((prod) => prod.id);

    const outOfStock = [];

    const collectionRef = collection(db, "products");

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prod = cart.find((prod) => prod.id === doc.id);
          const prodQuantity = prod.quantity;

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(db, "orders");

          return addDoc(collectionRef, objOrder);
        } else {
          return Promise.reject({
            type: "out_of_stock",
            products: outOfStock,
          });
        }
      })
      .then(({ id }) => {
        batch.commit();
        clearCart();
        setNotification("success", `El nuemro de Orden es: ${id}`);
      })
      .catch((error) => {
        if (error.type === "out_of_stock") {
          setNotification("error", "Sin stock");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <h1 className="cartTittle">Se esta generando su orden...</h1>;
  }

  return (
    <div className="form">
      <h1>Ingresa tus Datos!!</h1>
      <form className="formCheck">
        <input
          type="text"
          placeholder="Enter Name"
          className="inputCheck"
          onChange={handleChange}
          name="name"
          value={values.name}
        />
        <input
          type="text"
          placeholder="Enter email"
          className="inputCheck"
          onChange={handleChange}
          name="email"
          value={values.email}
        />
        <input
          type="text"
          placeholder="Enter Phone"
          className="inputCheck"
          onChange={handleChange}
          name="phone"
          value={values.phone}
        />
        <input
          type="text"
          placeholder="Enter Address"
          className="inputCheck"
          onChange={handleChange}
          name="address"
          value={values.address}
        />
        <button
          variant="primary"
          type="submit"
          className="submitCheck"
          onClick={() => handleCreateForm()}
        >
          Send Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
