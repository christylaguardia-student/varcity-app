import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { TextArea } from '../app/FormControls';

// just do this for now
function httpCallback() { console.log('pretending to make api call')};
const value = '';

export default class BasicInfo extends Component {
  render() {
    return (
      <div className="tile is-vertical">
        <TextArea value={value} propName="about" label="Bio" change={httpCallback} />
        <TextArea value={value} propName="awards" label="Awards" change={httpCallback} />
      </div>
    )
  }
}