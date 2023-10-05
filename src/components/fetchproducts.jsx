import { useEffect, useState } from "react";
import PopModal from "./modal_edit";
import Button from "react-bootstrap/Button";

function FetchProducts({
  products = [],
  setProducts,
  search = "",
  setSearch,
  fetchProducts,
}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [product, setProduct] = useState({});
  const handleVal = (product) => {
    setProduct({ ...product });
    handleShow();
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {products.map((val, index) => {
          return (
            <div
              className="col"
              key={index}
              index={index}
              style={{ order: product.length - 1 - val.id }}
            >
              <div className="card shadow-sm">
                <img
                  referrerPolicy="no-referrer"
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  src={val.url}
                  style={{ aspectRatio: "1/1", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6>{val.product_name}</h6>
                  <p
                    className="card-text"
                    style={{ maxHeight: "75px", overflowY: "scroll" }}
                  >
                    {val.description}
                  </p>
                  <h5>Rp{val.price.toLocaleString("id-ID")},00</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to cart
                      </button>
                      <Button variant="primary" onClick={(e) => handleVal(val)}>
                        Edit
                      </Button>
                    </div>
                    {/* <small className="text-body-secondary">9 mins</small> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <PopModal
          products={[...products]}
          setProducts={setProducts}
          show={show}
          setShow={setShow}
          product={product}
        />
      </div>
    </>
  );
}

export default FetchProducts;
