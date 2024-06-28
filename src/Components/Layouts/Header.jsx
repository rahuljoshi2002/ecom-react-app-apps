import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faPhone, faUserPlus, faSignInAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        <Navbar.Brand as={Link} to="/">RJ - Collection</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/registration">
              <FontAwesomeIcon icon={faUserPlus} className="me-2" />
              Registration
            </Nav.Link>
            <Nav.Link as={Link} to="/signin">
              <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
              SignIn
            </Nav.Link>
            <Nav.Link as={Link} to="/wishlist">
              <FontAwesomeIcon icon={faHeart} className="me-2" />
              Wishlist
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
