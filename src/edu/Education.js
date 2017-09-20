import React, { PropTypes } from 'react';



const Education = ({ institution, year, address, degree, testScores, handleDelete }) =>
  <div className='Education'>
    <button className='delete-event' onClick={handleDelete}>Delete Education</button>
    <h4>{institution}</h4>
    <div className='year'>
      <p>Year: {year}</p>
    </div>
    <div className='address'>
      <h4>Address</h4>
      <p>{country}</p>
      <p>{city}</p>
      <p>{state}</p>
    </div>
    <div className='degree'>
      <p>{degree}</p>
    </div>
    <div className='testScores'>
      <h4>Test Scores</h4>
      <h6>SAT</h6>
      <p>{reading}</p>
      <p>{math}</p>
      <p>{writing}</p>
      <h6>ACT</h6>
      <p>{reading}</p>
      <p>{math}</p>
      <p>{writing}</p>
      <p>{science}</p>
      <h6>International Baccalaureate</h6>
      <p>{language}</p>
      <p>{math}</p>
      <p>{science}</p>
      <p>{history}</p>
    </div>
  </div>



const propTypes = {
  institution: PropTypes.string.isRequired,
  year: PropTypes.string,
  address: PropTypes.shape({
    country: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string
  }),
  degree: PropTypes.string,
  testScores: PropTypes.shape({
    SAT: PropTypes.shape({
      reading: PropTypes.number,
      math: PropTypes.number,
      writing: PropTypes.number
    }),
    ACT: PropTypes.shape({
      reading: PropTypes.number,
      math: PropTypes.number,
      writing: PropTypes.number,
      science: PropTypes.number
  }),
    IB: PropTypes.shape({
      language: PropTypes.number,
      math: PropTypes.number,
      science: PropTypes.number, 
      history: PropTypes.number
    })
  }),
  handleDelete: PropTypes.func
}

export default Object.assign(Education, { propTypes });