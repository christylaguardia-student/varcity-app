import React, { Component } from 'react';
import MediaUpload from './MediaUpload';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek'
import 'bulma/css/bulma.css';


class MediaContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      select: {id: "1", text: "Image Upload"},
      selectOptions: [
        {id: "1", text: "Image Upload"},
        {id: "2", text: "Video Link"}
      ],
      descText: "Enter Media Description",
      videoUrl: "Paste Video Link",
      img: "Paste Image Link"
    }
  }

  virtualServerCallback = (newState) => {
    if (this.state.simulateXHR) {
    window.setTimeout(function() {
      this.changeState(newState);
    }.bind(this), this.state.XHRDelay);
    } else {
    this.changeState(newState);
    }
  };

  changeState = (newState) => {
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h1>Media Container</h1>
        <RIESelect
          value={this.state.select}
          options={this.state.selectOptions}
          propName="select"
          change={this.virtualServerCallback}
          />
      </div>
    )
  }
}

/* <MediaUpload value={this.state.text} change={this.httpTaskCallback} propName="select" /> */
export default MediaContainer;
