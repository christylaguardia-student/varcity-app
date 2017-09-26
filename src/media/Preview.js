import React from 'react';


export default function Preview({ description, mediaType, videoUrl, imageUrl }) {
  return
<h3>Preview:</h3>
          if(mediaType === 'Image Link') {(
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
          )}
          else if(mediaType === 'Video Link') {(
          <div className="card">
            <div className="card-image">
              <iframe title="description" width="560" height="315" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="card-content">
              <div className="media-content0">
                <p className="title is-4">{description}</p>
              </div>
            </div>
          </div>
          )}
        }