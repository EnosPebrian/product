// import AddProductModal from "./AddProductModal";
import { useState } from "react";
import FetchProducts from "./fetchproducts";
import Modal from "./modal_edit";
import "./style.css";
import PopModal from "./modal_edit";
import { Button } from "react-bootstrap";

function MarketBody({
  products,
  setProducts,
  search,
  setSearch,
  fetchProducts,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newdata, setNewdata] = useState("");
  const newproduct = (e) => {
    setNewdata("");
    handleShow();
  };
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Crystalline Mineral</h1>
            <p className="lead text-body-secondary">
              Discover the good looking, unique, natural minerals here
            </p>
            {/* <p>
              <a href="#" className="btn btn-primary my-2">
                Main call to action
              </a>
              <a href="#" className="btn btn-secondary my-2">
                Secondary action
              </a>
            </p> */}
          </div>
        </div>
      </section>

      <div
        className="album py-5 bg-body-tertiary"
        style={{ position: "relative" }}
      >
        <Button
          id="addproducts"
          variant="primary"
          onClick={(e) => newproduct(e, newdata)}
        >
          Add Items
          <PopModal
            products={[...products]}
            setProducts={setProducts}
            show={show}
            handleClose={handleClose}
            product={newdata}
          />
        </Button>

        <div className="container">
          <FetchProducts
            products={[...products]}
            setProducts={setProducts}
            search={search}
            setSearch={setSearch}
            fetchProducts={fetchProducts}
          />
        </div>
      </div>
    </main>
  );
}

export default MarketBody;
