import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/BottomNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BottomNav() {
    return (
        <>
          <Navbar collapseOnSelect className='nav justify-content-center' sticky='bottom'>
            <Nav>
              <Link to={{pathname: "https://www.linkedin.com/in/cameron-headlee"}} target="_blank"> 
                <div className='text-light'>
                  <FontAwesomeIcon className='bottom' icon={[ 'fab', 'linkedin' ]} size='2x' fixedWidth />    
                </div>
              </Link> 
              <Link to={{pathname: "https://twitter.com/FullStackCam"}} target="_blank">
                <div className='text-light'>
                  <FontAwesomeIcon className='bottom' icon={['fab', 'twitter']} size='2x' fixedWidth/>
                </div>
              </Link>
              <Link to={{pathname: "https://github.com/CameronHeadlee"}} target="_blank">
                <div className='text-light hover'>
                  <FontAwesomeIcon className='bottom' icon={['fab', 'github']} size='2x' fixedWidth />
                </div>
              </Link>
            </Nav>
          </Navbar>
      </>
    );
}

export default BottomNav;

 

         
