import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import * as actions from './actions';
import 

// TODO: import AddEduForm

const AddEducation = ({ dispatch }) =>
<div className='AddEducation'>
  <AddEduForm onSubmit={(values) => 
    dispatch(createNewEducation({
      institution: values.institution,
      year: values.year,
      address: values.address, 
      degree: values.degree, 
      testScores: values.testScores
    }))
    dispatch(reset('AddEducationForm'))
    }}
    />
</div>

export default connect()(AddEducation);