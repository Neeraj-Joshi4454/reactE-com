import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {NavLink} from 'react-router-dom';

const NavbarNew = () => {
  return (
    <>

<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Brand Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            {/* <Nav.Link href="cart">Cart</Nav.Link> */}
            <NavLink className={'nav-link'} to={'/'}>Home</NavLink>
            <NavLink className={'nav-link'} to={'/cart'}>Cart</NavLink>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default NavbarNew