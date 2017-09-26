import React  from 'react';
import { TextInput, NumberInput, Dropdown } from '../app/FormControls';
// import PropTypes from 'prop-types';


// export function EduForm(onSubmit, onChange, institution, year, country, city, state, degree, satReading, satMath, satWriting, actReading, actMath, actWriting, actScience, ibHistory, ibMath, ibLanguage, ibScience)
export default function Eduform({ onSubmit, onChange, props }) {

  const { institution, year, country, city, state, degree, satReading, satWriting, satMath, actMath, actReading, actScience, actWriting, ibHistory, ibLanguage, ibMath, ibScience } = props;
    return (
      <div className="column">
        <div>
          <p>
            <span><icon className="fa fa-check fa-lg" /></span>
            <span><icon className="fa fa-pencil fa-lg" /></span>
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="field">
            <TextInput prop={'institution'} label="Institution" change={onChange} value={institution}/>
            <NumberInput prop={'year'} label="Year" change={onChange} value={year}/>
            <label className="label">Address</label>
            <TextInput prop={'country'} label="Country" change={onChange} value={country}/>
            <TextInput prop={'city'} label="City" change={onChange} value={city}/>
            <TextInput prop={'state'} label="State" change={onChange} value={state}/>
            <Dropdown prop={'degree'} label="Degree" options={['High School Diploma', 'GED', 'Undergraduate degree', 'Graduate degree']} change={onChange} value={degree}/>
            <label>Test Scores</label>
            <h5>SAT</h5>
            <TextInput prop={'satReading'} label="Reading" change={onChange} value={satReading}/>
            <TextInput prop={'satMath'} label="Mathematics" change={onChange} value={satMath}/>
            <TextInput prop={'satWriting'} label="Writing" change={onChange} value={satWriting}/>
            <h5>ACT</h5>
            <TextInput prop={'actReading'} label="Reading" change={onChange} value={actReading}/>
            <TextInput prop={'actMath'} label="Mathematics" change={onChange} value={actMath}/>
            <TextInput prop={'actWriting'} label="Writing" change={onChange} value={actWriting}/>
            <TextInput prop={'actScience'} label="Science" change={onChange} value={actScience}/>
            <h5>International Baccalaureate</h5>
            <TextInput prop={'ibLanguage'} label="Language" change={onChange} value={ibLanguage}/>
            <TextInput prop={'ibMath'} label="Mathematics" change={onChange} value={ibMath}/>
            <TextInput prop={'ibScience'} label="Science" change={onChange} value={ibScience}/>
            <TextInput prop={'ibHistory'} label="History" change={onChange} value={ibHistory}/>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }



//  <div className="tile is-ancestor is-vertical">
//         <form onSubmit={onSubmit}>
//           <div className="field">
//             <label className="label">
//               Institution:
//           <input type="text" value={institution} onChange={onChange} placeholder="Institution" />
//             </label>
//             <label className="label">
//               Year:
//           <input type="number" value={year} onChange={onChange} placeholder="Year" />
//             </label>

//             <div className="field body is-grouped is-grouped-multiline">
//               <label className="label"><h3>Address</h3></label>
//               <label className="label">
//                 Country:
//           <input type="text" value={country} onChange={onChange} placeholder="Country" />
//               </label>
//               <label className="label">
//                 City:
//           <input type="text" value={city} onChange={onChange} placeholder="City" />
//               </label>
//               <label className="label">
//                 State:
//           <input type="text" value={state} onChange={onChange} placeholder="State" />
//               </label>
//             </div>
//             <label className="label">
//               Degree:
//           <select value={degree} onChange={onChange}>
//                 <option value="highSchoolDiploma">High School Diploma</option>
//                 <option value="ged">GED</option>
//                 <option value="undergraduate">Undergraduate Degree</option>
//                 <option value="graduate">Graduate Degree</option>
//               </select>
//             </label>
//             <label className="label"><h3>Test Scores</h3></label>
//             <h5>SAT</h5>
//             <label className="label">
//               Reading:
//           <input type="text" value={satReading} onChange={onChange} placeholder="Reading" />
//             </label>
//             <label className="label">
//               Math:
//           <input type="text" value={satMath} onChange={onChange} placeholder="Math" />
//             </label>
//             <label className="label">
//               Writing:
//           <input type="text" value={satWriting} onChange={onChange} placeholder="Writing" />
//             </label>
//             <h5>ACT</h5>
//             <label className="label">
//               Reading:
//           <input type="text" value={actReading} onChange={onChange} placeholder="Reading" />
//             </label>
//             <label className="label">
//               Math:
//           <input type="text" value={actMath} onChange={onChange} placeholder="Math" />
//             </label>
//             <label className="label">
//               Writing:
//           <input type="text" value={actWriting} onChange={onChange} placeholder="Writing" />
//             </label>
//             <label className="label">
//               Science:
//           <input type="text" value={actScience} onChange={onChange} placeholder="Science" />
//             </label>
//             <h5>International Baccalaureate</h5>
//             <label className="label">
//               Language:
//           <input type="text" value={ibLanguage} onChange={onChange} placeholder="Language" />
//             </label>
//             <label className="label">
//               Math:
//           <input type="text" value={ibMath} onChange={onChange} placeholder="Math" />
//             </label>
//             <label className="label">
//               Science:
//           <input type="text" value={ibScience} onChange={onChange} placeholder="Science" />
//             </label>
//             <label className="label">
//               History:
//           <input type="text" value={ibHistory} onChange={onChange} placeholder="History" />
//             </label>
//           </div>
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     </div>
//   )
// }

// EduForm.propTypes = {
//   institution: PropTypes.string.isRequired,
//   year: PropTypes.string,
//   address: PropTypes.shape({
//     country: PropTypes.string,
//     city: PropTypes.string,
//     state: PropTypes.string
//   }),
//   degree: PropTypes.string,
//   testScores: PropTypes.shape({
//     SAT: PropTypes.shape({
//       reading: PropTypes.number,
//       math: PropTypes.number,
//       writing: PropTypes.number
//     }),
//     ACT: PropTypes.shape({
//       reading: PropTypes.number,
//       math: PropTypes.number,
//       writing: PropTypes.number,
//       science: PropTypes.number
//   }),
//     IB: PropTypes.shape({
//       language: PropTypes.number,
//       math: PropTypes.number,
//       science: PropTypes.number,
//       history: PropTypes.number
//     })
//   }),
//   handleDelete: PropTypes.func
// }

// export default EduForm;

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