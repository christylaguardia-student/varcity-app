import React, { PropTypes } from 'react';
import { deleteEducation } from './actions';
import { connect } from 'react-redux';
import Education from './Education';

const EduList =({ educations, dispatch }) =>
<div className='listgroup'>
  {educations.map((educations) => 
  <Education 
    key={education.id}
    handleDelete={() => dispatch(deleteEducation(education.id))}
    {...educations}
    />
  )}
</div>

EduList.propTypes = {
  educations: PropTypes.array.isRequired
};

export default connect()(EduList);