import React from 'react';
import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
import { TextInput, TextArea, NumberInput, DateInput, Toggle, ToggleEditMode, TextSelect, UrlInput } from '../app/FormControls';
import riekSportList from '../utils/sports';

export default function Info() {
  // console.log(this.props);
  const { info, bio } = this.props.athletes;

  
  const disabled = false;
  function httpCallback() { console.log('pretending to make riek api call'); }

  const heightUOM = [{ id: 1, text: 'in' }, { id: 2, text: 'cm' }];
  const weightUOM = [{ id: 1, text: 'lb' }, { id: 2, text: 'kg' }];

  return (
    <div className="column is-mobile field">
      info component
      <div className="tile is-ancestor">
        <div className="tile is-vertical">
          {/* <UrlInput propName={info.profileUrl} name="profileUrl" label="Image" change={httpCallback} disabled={disabled} /> */}
        </div>
        <div className="tile is-vertical">
          <TextInput propName={info.firstName} name="firstName" label="First Name" change={httpCallback} disabled={disabled} />
          <TextInput propName={info.lastName} name="lastName" label="Last Name" change={httpCallback} disabled={disabled} />
          {/* <DateInput propName={info.dob} name="dob" label="Birthday" change={httpCallback} disabled={disabled} /> */}
          {/* <Toggle propName={info.public} name="public" label="Public Profile?" />
          <TextSelect propName={info.primarySport} name="primarySport" label="Primary Sport" options={riekSportList} />
          <TextInput propName={info.position} name="position" label="Position" />
          <TextInput propName={info.organization} name="organization" label="School/Organization" /> */}
          {/* <TextSelect propName={this.props.address.countries} name="country" label="Country" options={this.props.address.countries} />  */}
          {/* <TextSelect propName={value} name="region" label="State/Region" options={this.props.address.regions} change={() => this.handleRegionChange(this.value)} disabled={disabled} />  */}
          {/* <TextSelect propName={value} name="city" label="City" options={this.props.address.cities} change={this.saveAddress} disabled={disabled} />  */}
          
          <div className="field body is-narrow is-grouped is-grouped-multiline">
            {/* <NumberInput propName={info.height} name="height" label="Height" /> */}
            {/* <TextSelect propName={'info.heightUOM'} name="heightUOM" label="(in/cm)" options={heightUOM} /> */}
            {/* <NumberInput propName={info.weight} name="weight" label="Weight" change={httpCallback}disabled={disabled} /> */}
            {/* <TextSelect propName={info.weightUOM} name="weightUOM" label="(lb/kg)" options={weightUOM} /> */}
          </div>

          <div className="is-grouped is-grouped-multiline">
            {/* <UrlInput propName={info.facebookUrl} name="facebookUrl" label="Facebook" />
            <UrlInput propName={info.twitterUrl} name="twitterUrl" label="Twitter" />
            <UrlInput propName={info.instagramUrl} name="instagramUrl" label="Instagram" /> */}
          </div>
        </div>
      </div>
      <div className="tile is-vertical">
        {/* <TextArea propName={bio.about} name="about" label="Bio" />
        <TextArea propName={bio.awards} name="awards" label="Awards" /> */}
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     athletes: state.athletes,
//     address: state.address,
//   };
// };

// export default connect(mapStateToProps, {})(Info);
