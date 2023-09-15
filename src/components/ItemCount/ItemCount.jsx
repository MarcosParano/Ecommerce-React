import React, { useState } from "react";
import "./ItemCount.css";
import Swal from "sweetalert2";

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function handleReduce() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const isDisableSubtract = count === 1;
  const isDisableAdd = count === stock;

  return (
    <div className="countContainer">
      <div className="countBtnsConteiner">
        <button
          disabled={isDisableSubtract}
          className="countBtns"
          onClick={handleReduce}
        >
          -
        </button>
        <p className="quantity">{count}</p>
        <button
          disabled={isDisableAdd}
          className="countBtns"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            if (count === 0) {
              Swal.fire({
                title: "Debe agregar productos primero",
                icon: "warning",
                confirmButtonText: "OK",
                customClass: {
                  container: "sweetalert-container",
                  title: "sweetalert-title",
                  content: "sweetalert-content",
                  confirmButton: "sweetalert-confirm-button",
                },
              });
            } else {
              onAdd(count);
              Swal.fire({
                title: "Added to Cart",
                text: `${count} product added to cart`,
                icon: "success",
                confirmButtonText: "Subarashī",
                customClass: {
                  container: "sweetalert-container",
                  title: "sweetalert-title",
                  content: "sweetalert-content",
                  confirmButton: "sweetalert-confirm-button",
                },
              });
            }
          }}
          className="buyBtn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
