import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartView.css";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cart, totalPrice, clearCart, removeItem } = useContext(CartContext);

  return (
    <div className="cartViewContainer">
      <h1 className="cartTitle">Cart</h1>

      {cart.map((prod) => (
        <div key={prod.id} className="CartItem">
          <br />
          <h3 className="CWName">{prod.name}</h3>

          <p className="CWPrice">Price: ${prod.price}</p>
          <p className="CWTotalItem">
            Total: ${(prod.price * prod.quantity).toFixed(2)}
          </p>
          <p className="CWQuantity">Quantity: {prod.quantity}</p>
          <button
            className="deleteBtn"
            onClick={() => {
              removeItem(prod.id);
            }}
          >
            🗑️
          </button>
        </div>
      ))}
      {cart.length > 0 ? (
        <div className="cartFooter">
          <h2>Total Price: ${totalPrice()}</h2>
          <button className="vaciarBtn" onClick={clearCart}>
            Vaciar
          </button>
          <Link className="checkoutBtn" to="/checkout">
            Checkout
          </Link>
        </div>
      ) : (
        <div className="emptyContainer">
          <h3>Empty Cart</h3>

          <p>😑</p>
        </div>
      )}
    </div>
  );
};

export default CartView;
