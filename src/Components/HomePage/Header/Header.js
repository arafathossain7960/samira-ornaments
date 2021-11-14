import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
  const [adminUser, setAdminUser]=useState({});
  const {user}=useAuth();

  useEffect(()=>{
    if(user.email){
    const email= user?.email;
    const url = `https://afternoon-river-42961.herokuapp.com/users/${email}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>setAdminUser(data))
    
  }
  },[]);


 
console.log(adminUser)
 
    return (
        <>
      
     <Navbar collapseOnSelect expand="lg" sticky="top" className="text-right"  bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Samira Ornaments </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

      <Nav.Link as={Link} to='/home'>Home</Nav.Link>
      <Nav.Link as={Link} to='/moreCollection'>More Collection</Nav.Link>
      {
        user?.email && <Nav.Link as={Link} to='userDashboard'>User Dashboard </Nav.Link>
      }
     
      {
     adminUser?.role &&  <Nav.Link as={Link} to='admin'>Admin</Nav.Link>
      }
   
      { 
         user?.email? <Nav.Link as={Link} to='userDashboard'><p className='text-light text-right'>{user.email}</p></Nav.Link>
        : <Nav.Link as={Link} to='login'>Login</Nav.Link>
      }
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
 </>
    );
};

export default Header;