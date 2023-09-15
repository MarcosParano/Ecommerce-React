import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function ItemDetail({ id, name, image, price, stock, description, type }) {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id,
      name,
      price,
    };
    addItem(item, quantity);
  };

  return (
    <div className="ItemDetail">
      <article className="detailCard">
        <div className="detailImgContainer">
          <img className="detailImg" src={image} alt={name} />
        </div>
        <div className="detailInfo">
          <div className="detailHeader">
            <h2>{name}</h2>
            <p>{type}</p>
            <p>$ {price}</p>
          </div>
          <div className="detailInfo">
            <div className="itemDescription">
              <p>{description}</p>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>
          <div className="detailFooter">
            {stock === 0 ? (
              <>
                <div className="noStockContainer">
                  <p className="noStockMensaje">Out of stock!</p>
                  <Link className="noStockBtn" to="/">
                    See all products
                  </Link>
                </div>
              </>
            ) : quantityAdded > 0 ? (
              <Link to="/cart" className="terminarBtn">
                Go to Cart
              </Link>
            ) : (
              <ItemCount stock={stock} onAdd={handleOnAdd} />
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

export default ItemDetail;
