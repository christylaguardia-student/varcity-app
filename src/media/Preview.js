import React from 'react';

export default function Preview({ description, mediaType, videoUrl, imageUrl }) {
  return (
    mediaType === 'Image Link'
      ?
      (
        <div className="column is-one-third">
          <div className="card">
            <p>
              Image Preview:
        </p>
            <div className="card-image">
              <figure className="image is-4by3">
                <img alt={description} src={imageUrl}>
                </img>
              </figure>
            </div>
            <div className="card-content">
              <div className="media-content">
                <p className="title is-4">{description}</p>
              </div>
            </div>
          </div>
        </div>
      )
      :
      (
        <div className="column is-one-third">
          <div className="card">
            <p>
              Video Preview:
        </p>
            <div className="card-image">
              <iframe title="description" width="100%" height="auto" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="card-content">
              <div className="media-content">
                <p className="title is-4">{description}</p>
              </div>
            </div>
          </div>
        </div>
      )
  );
}
