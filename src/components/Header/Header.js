import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';

export default function Header() {
  return (
    <Navbar expand='lg'>
      <Navbar.Brand href='/' className='navbar-brand'>
        JDSB
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/resources'>Resources</Nav.Link>
          <Nav.Link href='/events'>Upcoming Events</Nav.Link>
          <Nav.Link href='/organization'>Organization</Nav.Link>
          <Nav.Link href='https://juniordevstruggleblog.com/' target='_blank'>
            Blog
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
