import React, { PropTypes } from 'react';
import { deleteEducation } from './actions';
import { connect } from 'react-redux';

const EduList =({ educations, dispatch }) =>
<div className='listgroup'>
  {educations.map((educations) => 
  <Education 
    key={education._id}
    handleDelete={() => dispatch(deleteEducation(education._id))}
    {...educations}
    />
  )}
</div>

EduList.propTypes = {
  educations: PropTypes.array.isRequired
};

export default connect()(EduList);