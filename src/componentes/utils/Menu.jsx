import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function Menu(){
    return (
    <Navbar style={{ backgroundColor: "#34d5eb" }}>
      <Container>
        <Navbar.Brand href="/anime">
            <img src="/Logo.png" width="100%" height="150" alt=""></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/anime" className='Menu'>ANIME</Nav.Link>
            <Nav.Link href="/manga" className='Menu'>MANGA</Nav.Link>
            <Nav.Link href="/novel" className='Menu'>NOVEL</Nav.Link>
          </Nav>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Button href="/login" style={{ backgroundColor: "#333", padding: "7px 40px 7px 40px", fontSize: '20px'}}>login</Button>{' '}
            </Nav.Item>
            <Nav.Item>
                <Button href="/singup" style={{ backgroundColor: "#4f74c8", padding: "7px 40px 7px 40px",marginLeft:'10px', fontSize: '20px' }}>Sing up</Button>{' '}
            </Nav.Item>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default Menu;