import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/site-with-bootstrap-and-reactjs"><Image width="65" height="65" variant="top-start" src="https://i.pinimg.com/736x/05/4b/b7/054bb7ee1b049a649f538d87292ed953.jpg" roundedCircle></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link className="text-decoration-none text-black" to="/site-with-bootstrap-and-reactjs">Home</Link></Nav.Link>
            <Nav.Link ><Link className="text-decoration-none text-black" to="/about">About</Link></Nav.Link>
            <Nav.Link ><Link className="text-decoration-none text-black" to="/doubts">Doubts</Link></Nav.Link>
            <Nav.Link ><Link className="text-decoration-none text-black" to="/contact">Contact</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar