import React, { Component, PropTypes } from 'react';
import { RIEInput, RIEToggle, RIETextArea, RIENumber, RIESelect } from 'riek';



class EduForm extends Component {
  render() {
    return(
    <form>  
      <div className="field">
        <TextInput value={value} propName="institution" label="Institution" placeholder="Institution" change={value} />
        <NumberInput value={value} propName="year" label="Year" placeholder="Year" change={value} />
        <label>Address</label>
        <TextInput value={value} propName="country" label="Country" placeholder="Country" change={value} />
        <TextInput value={value} propName="city" label="City" placeholder="City" change={value} />
        <TextInput value={value} propName="state" label="State" placeholder="State" change={value} />
        <TextSelect value={value} propName="degree" label="Degree" options={['High School Diploma', 'GED', 'Undergraduate degree', 'Graduate degree']} change={value} />
        <label>Test Scores</label>
        <h5>SAT</h5>
        <TextInput value={value} propName="reading" label="Reading" placeholder="Reading" change={value} />
        <TextInput value={value} propName="math" label="Mathematics" placeholder="Mathematics" change={value} />
        <TextInput value={value} propName="writing" label="Writing" placeholder="Writing" change={value} />
        <h5>ACT</h5>
        <TextInput value={value} propName="reading" label="Reading" placeholder="Reading" change={value} />
        <TextInput value={value} propName="math" label="Mathematics" placeholder="Mathematics" change={value} />
        <TextInput value={value} propName="writing" label="Writing" placeholder="Writing" change={value} />
        <TextInput value={value} propName="science" label="Science" placeholder="Science" change={value} />
        <h5>International Baccalaureate</h5>
        <TextInput value={value} propName="language" label="Language" placeholder="Language" change={value} />
        <TextInput value={value} propName="math" label="Mathematics" placeholder="Mathematics" change={value} />
        <TextInput value={value} propName="science" label="Science" placeholder="Science" change={value} />
        <TextInput value={value} propName="history" label="History" placeholder="History" change={value} />
      </div>
    </form>
    )
  }
}
EduForm.propTypes = {
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

export default EduForm;

// import React from 'react';
// import { connect } from 'react-redux';
// import { reset } from 'redux-form';
// import * as actions from './actions';
// import AddEduForm from './AddEduFrom';

// // TODO: import AddEduForm

// const AddEducation = ({ dispatch }) =>
// <div className='AddEducation'>
//   <AddEduForm onSubmit={(values) => {
//     dispatch(createNewEducation({
//       institution: values.institution,
//       year: values.year,
//       address: values.address, 
//       degree: values.degree, 
//       testScores: values.testScores
//     }))
//     dispatch(reset('AddEducationForm'))
//     }}
//     />
// </div>

// export default connect()(AddEducation);

// const EducationAddForm = ({ handleSubmit }) =>
// <form onSubmit={handleSubmit}>
//   <div className="field">
//     <TextInput value={value} propName="institution" label="Institution" placeholder="Institution" change={value} />
//     <NumberInput value={value} propName="year" label="Year" placeholder="Year" change={value} />
//     <label>Address</label>
//     <TextInput value={value} propName="country" label="Country" placeholder="Country" change={value} />
//     <TextInput value={value} propName="city" label="City" placeholder="City" change={value} />
//     <TextInput value={value} propName="state" label="State" placeholder="State" change={value} />
//     <TextSelect value={value} propName="degree" label="Degree" options={['High School Diploma', 'GED', 'Undergraduate degree', 'Graduate degree']} change={value} />
//     <label>Test Scores</label>
//     <h5>SAT</h5>
//     <TextInput value={value} propName="reading" label="Reading" placeholder="Reading" change={value} />
//     <TextInput value={value} propName="math" label="Mathematics" placeholder="Mathematics" change={value} />
//     <TextInput value={value} propName="writing" label="Writing" placeholder="Writing" change={value} />
//     <h5>ACT</h5>
//     <TextInput value={value} propName="reading" label="Reading" placeholder="Reading" change={value} />
//     <TextInput value={value} propName="math" label="Mathematics" placeholder="Mathematics" change={value} />
//     <TextInput value={value} propName="writing" label="Writing" placeholder="Writing" change={value} />
//     <TextInput value={value} propName="science" label="Science" placeholder="Science" change={value} />
//     <h5>International Baccalaureate</h5>
//     <TextInput value={value} propName="language" label="Language" placeholder="Language" change={value} />
//     <TextInput value={value} propName="math" label="Mathematics" placeholder="Mathematics" change={value} />
//     <TextInput value={value} propName="science" label="Science" placeholder="Science" change={value} />
//     <TextInput value={value} propName="history" label="History" placeholder="History" change={value} />
//   </div>
// </form>