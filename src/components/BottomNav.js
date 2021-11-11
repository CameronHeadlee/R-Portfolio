import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/BottomNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  navStyles: {
    backgroundColor: '#9a1aef'
  }
}

function BottomNav() {
    return (
        <>
          <Navbar  style={styles.navStyles}  collapseOnSelect className='justify-content-center' sticky='bottom'>
        <Nav>
           <Link to={{pathname: "https://www.linkedin.com/in/cameron-headlee"}} target="_blank"
            
            > 
            <div className='text-light'>
              <FontAwesomeIcon className='bottom' icon={[ 'fab', 'linkedin' ]} size='3x' fixedWidth />    
            </div>
          
          </Link> 
            <Link to={{pathname: "https://twitter.com/FullStackCam"}} target="_blank"
          
          >
            <div className='text-light'>
            <FontAwesomeIcon className='bottom' icon={['fab', 'twitter']} size='3x' fixedWidth/>
            </div>
          
          </Link>
          
         <Link to={{pathname: "https://github.com/CameronHeadlee"}} target="_blank"
          
          >
            <div className='text-light hover'>
            <FontAwesomeIcon className='bottom' icon={['fab', 'github']} size='3x' fixedWidth />
            </div>
           
          
        </Link>
        </Nav>
       </Navbar>
      </>
    );
}

export default BottomNav;

 

         
