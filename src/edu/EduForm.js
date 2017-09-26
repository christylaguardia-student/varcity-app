import React  from 'react';
import { TextInput, NumberInput, Dropdown } from '../app/FormControls';

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
