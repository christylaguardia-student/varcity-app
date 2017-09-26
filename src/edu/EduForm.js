import React  from 'react';
import { TextInput, NumberInput, Dropdown } from '../app/FormControls';

export default function Eduform({ onSubmit, onChange, props }) {

  const { institution, year, country, city, state, degree, satReading, satWriting, satMath, actMath, actReading, actScience, actWriting, ibHistory, ibLanguage, ibMath, ibScience } = props;
    return (
      <div className="column">
        <form onSubmit={onSubmit}>
          <div className="field">
            <p className="is-size-3">Add a new school</p>
            <TextInput prop={'institution'} label="Institution" change={onChange} value={institution}/>
            <NumberInput prop={'year'} label="Year" change={onChange} value={year}/>
            <label className="label">Address</label>
            <TextInput prop={'country'} label="Country" change={onChange} value={country}/>
            <TextInput prop={'city'} label="City" change={onChange} value={city}/>
            <TextInput prop={'state'} label="State" change={onChange} value={state}/>
            <Dropdown prop={'degree'} label="Degree" options={['High School Diploma', 'GED', 'Undergraduate degree', 'Graduate degree']} change={onChange} value={degree}/>
            <p className="is-size-3">Update your test scores</p>
            <h5>SAT</h5>
            <NumberInput prop={'satReading'} label="Reading" change={onChange} value={satReading}/>
            <NumberInput prop={'satMath'} label="Mathematics" change={onChange} value={satMath}/>
            <NumberInput prop={'satWriting'} label="Writing" change={onChange} value={satWriting}/>
            <h5>ACT</h5>
            <NumberInput prop={'actReading'} label="Reading" change={onChange} value={actReading}/>
            <NumberInput prop={'actMath'} label="Mathematics" change={onChange} value={actMath}/>
            <NumberInput prop={'actWriting'} label="Writing" change={onChange} value={actWriting}/>
            <NumberInput prop={'actScience'} label="Science" change={onChange} value={actScience}/>
            <h5>International Baccalaureate</h5>
            <NumberInput prop={'ibLanguage'} label="Language" change={onChange} value={ibLanguage}/>
            <NumberInput prop={'ibMath'} label="Mathematics" change={onChange} value={ibMath}/>
            <NumberInput prop={'ibScience'} label="Science" change={onChange} value={ibScience}/>
            <NumberInput prop={'ibHistory'} label="History" change={onChange} value={ibHistory}/>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
