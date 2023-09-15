import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
import Loader from "../Loader/Loader";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const type = useParams().type;

  useEffect(() => {
    const productsRef = collection(db, "products");
    const q = type
      ? query(productsRef, where("type", "==", type))
      : productsRef;

    setIsLoading(true);

    getDocs(q).then((resp) => {
      setProducts(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    });
  }, [type]);

  if (isLoading) {
    return (
      <div className="loaderContainer">
        <Loader />
      </div>
    );
  } else {
    return (
      <>
        <ItemList products={products} />
      </>
    );
  }
}

export default ItemListContainer;
