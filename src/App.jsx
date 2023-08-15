import Market from "./pages/market";
import "./App.css";
import items from "./components/items";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import api from "./api/api";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const fetchProducts = async () => {
    const res = await api.get(`/products?product_name_like=${search}`);
    setProducts([...res.data]);
    // console.log(res);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [search]);

  return (
    <>
      <Routes>
        <Route
          path="/market"
          element={
            <Market
              products={[...products]}
              setProducts={setProducts}
              search={search}
              setSearch={setSearch}
              fetchProducts={fetchProducts}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
