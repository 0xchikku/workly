import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link style={{textDecoration: 'none', color: '#000'}} to='/'>Careerly</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link style={{textDecoration: 'none', color: '#6c757d'}} to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration: 'none', color: '#6c757d'}} to='/savedjobs'>Saved Jobs</Link></Nav.Link>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button className="ms-2" variant="outline-dark">Search</Button>
          </Form> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;