import "./Item.css";
import { Link } from "react-router-dom";

function Item({ id, name, type, image, price, stock }) {
  return (
    <article className="cardContainer">
      <Link className="card" to={`/product/${id}`}>
        <div className="itemImgContainer">
          <img className="itemImg" src={image} alt={name} />
        </div>
        <div>
          <p>{type}</p>
        </div>
        <div className="itemInfo">
          <h2 className="itemName">{name}</h2>
          <p>$ {price}</p>
        </div>
      </Link>
    </article>
  );
}

export default Item;
