import { useState } from "react";
import "./style.css";
import {
  Container,
  Form,
  Nav,
  Navbar as BootstrapNavbar,
} from "react-bootstrap";
import { FiBell, FiHeart, FiSearch, FiSettings } from "react-icons/fi";

function Navbar() {
  const [dot, setDot] = useState(false);
  return (
    <BootstrapNavbar className="border-bottom py-3">
      <Container>
        <BootstrapNavbar.Brand href="#" className="fw-bold fs-4 text-primary">
          LOGO
        </BootstrapNavbar.Brand>

        <Form className="d-flex mx-auto position-relative search-wrapper">
          <Form.Control
            type="search"
            placeholder="Search for a car"
            className="rounded-pill ps-5"
          />
          <FiSearch className="position-absolute search-icon" />
        </Form>

        <Nav className="gap-3">
          <Nav.Link href="#" className="icon-link">
            <FiHeart size={20} />
          </Nav.Link>
          <Nav.Link
            href="#"
            className="icon-link position-relative"
            onClick={() => {
              setDot(!dot);
            }}
          >
            <FiBell size={20} />
            <span className={dot ? "notification-dot" : ""}></span>
          </Nav.Link>
          <Nav.Link href="#" className="icon-link">
            <FiSettings size={20} />
          </Nav.Link>
          <div className="user-avatar">
            <img src="/image.png" alt="User" />
          </div>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
