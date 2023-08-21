import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header({ products, setProducts, search, setSearch }) {
  function searchcapture(e) {
    console.log(`search`, e.key, e.target.value);
    if (e.key === "Enter") {
      e.preventDefault();

      setSearch(document.getElementById("searchform").value);
    }
  }

  function searchcaptureclick(e) {
    console.log(e.key, document.getElementById("searchform").value);
    setSearch(document.getElementById("searchform").value);
  }
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Crystalux</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Crystalline Mineral
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Rocks</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Tools</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                onKeyPress={(e) => searchcapture(e)}
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id="searchform"
              />
              <Button
                variant="outline-success"
                onClick={(e) => searchcaptureclick(e)}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
