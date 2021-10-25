import React from 'react';
import '../../styles/Portfolio.css'

const styles = {
  portfolioStyles: {
       backgroundColor: '#5e5d5c',
       minHeight: '100vh',
   },
   headingStyles: {
     paddingTop: '30px',
     color: '#f1faee',
     textAlign: 'center'
   }
};

function Portfolio(props) {
    return (
        <>
        <div style={styles.portfolioStyles}>
       <h1 class='justify-content-center' style={styles.headingStyles}>Portfolio</h1>
        {props.children}
        </div>
      </>
    );
}

export default Portfolio;