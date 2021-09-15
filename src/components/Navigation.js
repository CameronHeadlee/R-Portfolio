import React from 'react';
import { Link } from 'react-router-dom';


function Navigation({currentPage, handlePageChange}) {
    return (

        <ul className='nav navigation justify-content-end'>
            <li className='nav-item'>
                <Link to="/About"
                   
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/Portfolio"
                    
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/Contact"
                    
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                > 
                    Contact
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/Resume"
                    
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
        </ul>
    );
}

export default Navigation;