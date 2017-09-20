import React from 'react'
import { Field, reduxForm } from 'redux-form'



const EducationAddForm = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
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