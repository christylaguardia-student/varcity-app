import React from 'react';
import { TextInput, NumberInput, Dropdown } from '../app/FormControls';

export default function Eduform({ onSchoolSubmit, onTestSubmit, onSchoolChange, onTestChange, schools, tests }) {

  const { institution, year, country, city, state, degree } = schools;
  const { satReading, satWriting, satMath, actMath, actReading, actScience, actWriting, ibHistory, ibLanguage, ibMath, ibScience } = tests;
  return (
    <div className="column">
      <form onSubmit={onSchoolSubmit}>
        <div className="field">
          <p className="is-size-3">Add a new school</p>
          <TextInput prop={'institution'} label="Institution" change={onSchoolChange} value={institution} />
          <NumberInput prop={'year'} label="Year" change={onSchoolChange} value={year} />
          <label className="label">Address</label>
          <TextInput prop={'country'} label="Country" change={onSchoolChange} value={country} />
          <TextInput prop={'city'} label="City" change={onSchoolChange} value={city} />
          <TextInput prop={'state'} label="State" change={onSchoolChange} value={state} />
          <Dropdown prop={'degree'} label="Degree" options={['High School Diploma', 'GED', 'Undergraduate degree', 'Graduate degree']} change={onSchoolChange} value={degree} />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <form School={onTestSubmit}>
        <div className="field">
          <p className="is-size-3">Update your test scores</p>
          <h5>SAT</h5>
          <NumberInput prop={'satReading'} label="Reading" change={onTestChange} value={satReading} />
          <NumberInput prop={'satMath'} label="Mathematics" change={onTestChange} value={satMath} />
          <NumberInput prop={'satWriting'} label="Writing" change={onTestChange} value={satWriting} />
          <h5>ACT</h5>
          <NumberInput prop={'actReading'} label="Reading" change={onTestChange} value={actReading} />
          <NumberInput prop={'actMath'} label="Mathematics" change={onTestChange} value={actMath} />
          <NumberInput prop={'actWriting'} label="Writing" change={onTestChange} value={actWriting} />
          <NumberInput prop={'actScience'} label="Science" change={onTestChange} value={actScience} />
          <h5>International Baccalaureate</h5>
          <NumberInput prop={'ibLanguage'} label="Language" change={onTestChange} value={ibLanguage} />
          <NumberInput prop={'ibMath'} label="Mathematics" change={onTestChange} value={ibMath} />
          <NumberInput prop={'ibScience'} label="Science" change={onTestChange} value={ibScience} />
          <NumberInput prop={'ibHistory'} label="History" change={onTestChange} value={ibHistory} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
