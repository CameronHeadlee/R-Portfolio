import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
    return (
        <>
    <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="">Cameron Headlee</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
        <Nav.Link>
            <Link to="/About"
                   
               > About

            </Link>  
        </Nav.Link>
        <Nav.Link>
            <Link to="/Portfolio"
                     
                > My Work

            </Link>
        </Nav.Link>
        <Nav.Link>
            <Link to="/Contact"
                    
                    
                > Contact

            </Link>
        </Nav.Link>
        <Nav.Link>
            <Link to="/Resume"
                     
                > Resume

            </Link>
        </Nav.Link>
        </Navbar.Collapse>
    </Navbar>
      </> 
    );
}

export default Navigation;