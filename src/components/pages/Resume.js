import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

const styles = {
  resumeStyles: {
    backgroundColor: '#5e5d5c',
    color: '#f1faee',
    minHeight: '100vh',
  },
  headingStyles: {
    fontSize: '40px'
  },
  textStyles: {
    fontSize: '25px',
    fontWeight: 'bold',
    textIndent: "30px"
  },
  listStyles: {
    fontSize: '20px',
    fontWeight: 'bold',
    border: '8px dashed #9a1aef'
  },
  listColors: {
    background: '#5e5d5c',
    color: '#f1faee'
  }
};

function Resume() {
    return(
      <>
      <div style={styles.resumeStyles}>
      <div className='d-flex justify-content-center'>
      <h1>Resume</h1>
      </div>
      <div className='d-flex justify-content-center'>
      <a href="Resume (F).pdf" download>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
      </a>
      </div>

      <div className='d-flex justify-content-center'>
      <h2 className='text-start pt-1' style={styles.headingStyles}>Transferable Skills</h2>
      </div>
      <div className='d-flex justify-content-center'>
        <div style={styles.listStyles}>
      <ListGroup variant='flush' className='text-center' style={{width: '15rem'}}>
        <ListGroup.Item style={styles.listColors}>Collaboration</ListGroup.Item>
        <ListGroup.Item style={styles.listColors}>Organized</ListGroup.Item>
        <ListGroup.Item style={styles.listColors}>Passionate</ListGroup.Item>
        <ListGroup.Item style={styles.listColors}>Communication</ListGroup.Item>
        <ListGroup.Item style={styles.listColors}>Attitude</ListGroup.Item>
      </ListGroup>
        </div>
      </div>

      <div className='d-flex justify-content-center pt-5'>
      <h2 style={styles.headingStyles}>Volunteer</h2>
      </div>
      <div className='d-flex justify-content-center ps-3 pe-3'>
      <p style={styles.textStyles}>It has always been a passion of mine to give back to others. Throughout my life I have volunteered time in many places. Whether it was volunteering at food banks, clothing pickups, Christmas drives, or special education classes. I have enjoyed every moment. It is very humbling to help someone that is less fortunate than myself because with every volunteer opportunity, the impact on my perspective for life has grown. The community I have served is always grateful for life and has taught me it is important to have a positive attitude and keep my head up, no matter the situation. </p>
      </div>
      </div>
      </>
    )
}

export default Resume;