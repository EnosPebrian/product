import Market from "./pages/market";
import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import api from "./api/api";
import Redirect from "./components/redirect";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const fetchProducts = async () => {
    try {
      const res = await api.get(`/products/name?product_name=${search}`);
      setProducts([...res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchSearch = setTimeout(() => {
      fetchProducts();
    }, 700);
    return () => {
      clearTimeout(fetchSearch);
    };
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
        <Route path="/" element={<Redirect />} />
      </Routes>
    </>
  );
}

export default App;
