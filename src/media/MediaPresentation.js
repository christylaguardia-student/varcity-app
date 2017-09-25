import React, { Component } from 'react';
import { Player } from 'video-react';

export function MediaItem({ description, mediaType, videoUrl, imageUrl }) {
  return (
    mediaType === 'Image Link' 
    ? (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img alt={description} src={imageUrl}>
            </img>
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content0">
            <p className="title is-4">{description}</p>
          </div>
        </div>
      </div>
    ) 
    : (
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <Player>
                <source src={videoUrl} />
              </Player>
            </figure>
          </div>
          <div className="card-content">
            <div className="media-content0">
              <p className="title is-4">{description}</p>
            </div>
          </div>
        </div>
      )
  );
}

export class MediaPresentation extends Component {
  render() {
    const { mediaArr, onUpdate, itemNum } = this.props;

    const mediaGallery = mediaArr.map((item, i) => (
      <MediaItem key={i} description={item.description} mediaType={item.mediaType} videoUrl={item.videoUrl} imageUrl={item.imageUrl} onUpdate={onUpdate} />
    ));

    return (
      <div>
        <div className="columns level">
          <div className="column">
              <nav id="galleryNav">
                <button onClick={() => onUpdate(-1)}>&laquo; </button> 
                <button onClick={() => onUpdate(1)}>&raquo;</button>
                <p>{itemNum + 1} of {mediaArr.length}</p>
              </nav>
              {mediaGallery[itemNum]}
          </div>
        </div>
      </div>
    );
  }
}