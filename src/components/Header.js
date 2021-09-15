import React from 'react';
import '../styles/Header.css';

const styles = {
    headingStyle: {
        verticalAlign: 'text-bottom',
        fontSize: '50px',
    },
};

function Header(props) {
    return (
        <header className='header'>
            <h1 styles={styles.headingStyle}>Cameron Headlee</h1>
            {props.children}
        </header>
      
    );
}

export default Header;