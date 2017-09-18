import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { DateInput, NumberInput, TextInput, TextSelect, Toggle, UrlInput } from '../app/FormComponents';
import SelectLocation from './SelectLocation';
import riekSportList from './riekSportsList';
import { getCountries, getStates, getCities } from '../services/location/geodata';

// just do this for now
function httpCallback() { console.log('pretending to make api call')};

// will be coming from props
const value = '';

class BasicInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      countries: [{ id: 1, text: 'United States'} , { id: 2, text: 'Mexico' }, { id: 3, text: 'Canada' }],
      regions: [{ id: 1, text: 'Oregon'} , { id: 2, text: 'Washington' }, { id: 3, text: 'California' }],
      cities: [{ id: 1, text: 'Portland'} , { id: 2, text: 'Bend' }, { id: 3, text: 'Astoria' }],
    }
  }

  componentDidMount() {
    // QUESTION: CORS!!!
    getCountries()
      .then(countries => {
        const riekList = countries.map((country, index) => {
          return { id: index, text: country };
        })
        console.log(riekList);
        this.setState({ countries: riekList });
      });
  }

  render() {
    const heightUOM = [
      { id: 1, text: "in" },
      { id: 2, text: "cm" }
    ];
    
    const weightUOM = [
      { id: 1, text: "lb" },
      { id: 2, text: "kg" }
    ];

    return (
      <div className="field">
        <UrlInput value={value} propName="profileUrl" label="Image" placeholder="Profile Image URL" change={httpCallback} />
        
        <TextInput value={value} propName="firstName" label="First Name" change={httpCallback} />
        <TextInput value={value} propName="lastName" label="Last Name" change={httpCallback} />
        <Toggle value={value} propName="public" label="Public Profile?" change={httpCallback} />
        
        <TextSelect value={value} propName="primarySport" label="Primary Sport" options={riekSportList} change={httpCallback} /> 
        <TextInput value={value} propName="position" label="Position" change={httpCallback} />
        
        <TextInput value={value} propName="organization" label="School/Organization" change={httpCallback} />
        <TextSelect value={value} propName="country" label="Country" options={this.state.countries} change={httpCallback} /> 
        <TextSelect value={value} propName="region" label="State/Region" options={this.state.regions} change={httpCallback} /> 
        <TextSelect value={value} propName="city" label="City" options={this.state.cities} change={httpCallback} /> 
        
        <DateInput value={value} propName="dob" label="Birthday" change={httpCallback} />
        <NumberInput value={value} propName="height" label="Height" change={httpCallback}/>
        <TextSelect value={value} propName="heightUOM" label="(in/cm)" options={heightUOM} change={httpCallback} /> 
        <NumberInput value={value} propName="weight" label="Weight" change={httpCallback}/>
        <TextSelect value={value} propName="weightUOM" label="(lb/kg)" options={weightUOM} change={httpCallback} /> 

        <UrlInput value={value} propName="facebookUrl" label="Facebook" placeholder="Facebook URL (optional)" change={httpCallback} />
        <UrlInput value={value} propName="twitterUrl" label="Twitter" placeholder="Twitter URL (optional)" change={httpCallback} />
        <UrlInput value={value} propName="instagramUrl" label="Instagram" placeholder="Instagram URL (optional)" change={httpCallback} />
      </div>
  )}
}

export default BasicInfo;
