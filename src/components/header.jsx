import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header({ products, setProducts, search, setSearch }) {
  function searchcapture(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
    setSearch(document.getElementById("searchform").value);
  }

  function searchcaptureclick(e) {
    console.log(e.key, document.getElementById("searchform").value);
    setSearch(document.getElementById("searchform").value);
  }
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Crystalline Mineral</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Contact Us</Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Rocks</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Tools</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                onChange={(e) => searchcapture(e)}
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
