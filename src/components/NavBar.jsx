import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to='/' className='fs-4 text-info ecommerce'>
          Ecommerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <div>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/login'>
                <i className='fa-regular fa-user fs-2 text-info'></i>
              </Nav.Link>

              <Nav.Link className='fs-4 text-info' as={Link} to='/purchases'>
                Purchases
              </Nav.Link>
              <Nav.Link as={Link} to='/products/:id'>
                <i className='fa-solid fa-cart-shopping fs-2 text-info'></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavBar
