import React from 'react';
import '../../styles/Resume.css';

const styles = {
  resumeStyles: {
    backgroundColor: '#7B2D26',
    color: '#FFFFFF',
    minHeight: '100vh',
  },
  headingStyles: {
    paddingTop: '90px',
    fontSize: '40px'
  },
  textStyles: {
    fontSize: '20px'
  }
  
};

function Resume() {
    return(
      <>
      <div style={styles.resumeStyles}>
      <h2 style={styles.headingStyles}>Transferable Skills:</h2>
      <ul style={styles.textStyles}>
        <li>
        Collaboration
        </li>
        <li>
          Organized
        </li>
        <li>
          Passionate
        </li>
        <li>
          Communication
        </li>
      </ul>
      <h2 style={styles.headingStyles}>Volunteer</h2>
      <p style={styles.textStyles}>Giving back to my community is something I have always loved doing. I have given over 100 hours to volunteering throughout my life. My involvement in the community has stretched all around central Ohio! I have given time at food banks in Grove City, Christmas drives in Delaware, and even clothing banks in columbus. With every site I have been fortunate enough to volunteer at I have not only been giving back but I have also received a deep gratitude for the people in my community. It is humbling to see someone who has never been fortunate enough to have to opportunities I have be just as if not more happy than me. It has truly taught me that no matter your situation it is always about your perspective and attitude.</p>
      </div>
      </>
    )
}

export default Resume;