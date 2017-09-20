import React, { PropTypes } from 'react'



const Education = ({ institution, year, address, degree, testScores, handleDelete }) =>
  <div className='Education'>
    <button className='delete-event' onClick={handleDelete}>Delete Education</button>
    <h4>{institution}</h4>
    <div className='year'>
      <p>Year: {year}</p>
    </div>
    <div className='address'>
    <h4>Address</h4>
    <p>Country</p>
    <p>City</p>
    <p>State</p>
    </div>
    <div className='degree'>
      <p>{degree}</p>
    </div>
    <div className='testScores'>
      <h4>Test Scores</h4>
      <h6>SAT</h6>
      <p>Reading</p>
      <p>Mathematics</p>
      <p>Writing</p>
      <h6>ACT</h6>
      <p>Reading</p>
      <p>Mathematics</p>
      <p>Writing</p>
      <p>Science</p>
      <h6>International Baccalaureate</h6>
      <p>Language</p>
      <p>Mathematics</p>
      <p>Science</p>
      <p>History</p>
    </div>      
    </div>



const propTypes = {
  institution: PropTypes.string.isRequired,
  year: PropTypes.string,
  address: PropTypes.string,
  degree: PropTypes.string,
  testScores: PropTypes.string,
  handleDelete: PropTypes.func
}

export default Object.assign(Education, { propTypes })