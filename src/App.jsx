import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import CartView from "./components/CartView/CartView";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="product/:id" element={<ItemDetailContainer />} />
              <Route path="/type/:type" element={<ItemListContainer />}></Route>
              <Route path="/cart" element={<CartView />}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
