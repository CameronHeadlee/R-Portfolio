import React from 'react';
import '../../styles/Portfolio.css'

const styles = {
  portfolioStyles: {
       backgroundColor: '#0B7A75',
       minHeight: '100vh',
   },
   headingStyles: {
     paddingTop: '80px',
   }
};

function Portfolio(props) {
    return (
        <>
        <div style={styles.portfolioStyles}>
       <h1>Portfolio</h1>
        {props.children}
        </div>
      </>
    );
}

export default Portfolio;