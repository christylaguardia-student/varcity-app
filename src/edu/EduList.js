import React, { PropTypes } from 'react';
import { deleteEducation } from './actions';
import { connect } from 'react-redux';
import Education from './Education';

const EduList = ({ educations, dispatch }) => {
  console.log('education is', educations, 'dispatch is', dispatch);
  return (
    <div className='listgroup'>
      {educations.map(education =>
        <Education
          key={education.id}
          {...educations}
        />
      )}
    </div>
  );
}

EduList.propTypes = {
  educations: PropTypes.array.isRequired
};

export default connect()(EduList);
{/* handleDelete={() => dispatch(deleteEducation(education.id))} */}