import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
// import { Nav, Dropdown } from 'bootstrap-4-react';
import logo from '../imgs/CCC Logo -SVG.svg';
import {Nav ,Navbar} from 'react-bootstrap';

const Navigation = () => {
  return (

      <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
      <img id="logo" src={logo} alt="The C3 Podcast logo" className="d-inline-block align-top" /> 
      </Navbar.Brand>
      <Navbar.Toggle id="but" aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto" collapseOnSelect expand="lg">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Notes">Show Notes</Nav.Link>
        <Nav.Link href="/Podcast">Podcast</Nav.Link>
        <Nav.Link href="/Connect">Connect</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
  );
}


export default Navigation;