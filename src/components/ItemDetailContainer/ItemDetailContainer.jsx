import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import Loader from "../Loader/Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "products", id);
    getDoc(docRef).then((resp) => {
      setProduct({ ...resp.data(), id: resp.id });
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    });
  }, [id]);

  if (isLoading) {
    return (
      <div className="loaderContainer">
        <Loader />
      </div>
    );
  } else if (product) {
    return (
      <div className="ItemDetailContainer">
        <ItemDetail {...product} />
      </div>
    );
  } else {
    return <div>Error: Product not found</div>;
  }
}

export default ItemDetailContainer;
