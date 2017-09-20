import React, { Component } from 'react';
import { MediaGallery } from './MediaGallery';

export class MediaContainer extends Component {

  render() {
    return (
      <div className="column is-mobile">
        <h1>Media Container</h1>
        <MediaGallery />
      </div>
    )
  }
}

export default MediaContainer;
