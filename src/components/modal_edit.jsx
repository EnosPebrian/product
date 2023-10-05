import { useState, useRef, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import api from "../api/api";

function PopModal({ products, setProducts, product, setShow, show }) {
  const handleClose = () => setShow(false);
  console.log(setShow);
  const new_product = {
    url: "",
    product_name: "",
    description: "",
    price: 0,
  };

  const [currval, setCurrval] = useState({});
  useEffect(() => {
    product ? setCurrval({ ...product }) : setCurrval({ ...new_product });
  }, [product.id]);

  function editHandler(e, currval) {
    const temp = { ...currval };
    temp[e.target.id] = e.target.value;
    temp["price"] = Number(temp["price"]);
    setCurrval(temp);
  }

  async function setEdit(products, setProducts, currval) {
    const temp = [...products];
    if (currval.id) {
      const index = products.findIndex((item) => item.id == product.id);
      temp[index] = currval;
      setProducts(temp);
      await api.patch(`/products/${currval.id}`, currval);
      handleClose();
      setShow(false);
    } else {
      temp.unshift(currval);
      setProducts(temp);
      await api.post(`/products`, currval);
      handleClose();
      setShow(false);
    }
  }

  async function deleteproduct(e, currval, products, setProducts) {
    if (
      window.confirm(
        "are you sure want to delete this product? You cannot revert this process"
      )
    ) {
      const index = products.findIndex((item) => item.id == product.id);
      const temp = [...products];
      temp.splice(index, 1);
      setProducts(temp);
      await api.delete(`/products/${product.id}`);
      handleClose();
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="url">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                onChange={(e) => editHandler(e, currval)}
                type="text"
                value={currval?.url}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="product_name">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                type="text"
                // value={val.product_name}
                value={currval.product_name}
                autoFocus
                onChange={(e) => editHandler(e, currval)}
                // id="product_name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={currval.description}
                // value={val.email}
                autoFocus
                onChange={(e) => editHandler(e, currval)}
                // id="description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                value={currval.price}
                // value={val.price}
                autoFocus
                onChange={(e) => editHandler(e, currval)}
                // id="price"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {product ? (
            <Button
              variant="secondary"
              onClick={(e) => deleteproduct(e, currval, products, setProducts)}
            >
              Delete
            </Button>
          ) : null}
          <Button
            variant="primary"
            onClick={(e) => setEdit(products, setProducts, currval)}
          >
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopModal;
