import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
  const {logoutUser, user}=useAuth();
    return (
        <>
     <Navbar collapseOnSelect expand="lg" className="text-right"  bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Samira Ornaments</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/home'>Home</Nav.Link>
      <Nav.Link as={Link} to='/moreCollection'>More Collection</Nav.Link>
      <Nav.Link as={Link} to='userDashboard'>User Dashboard</Nav.Link>
      ?<Nav.Link as={Link} to='admin'>Admin</Nav.Link>
      <Nav.Link as={Link} to='login'>Login</Nav.Link>
      {
        user?.email &&<button onClick={logoutUser}>logout</button>
      }
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
 </>
    );
};

export default Header;