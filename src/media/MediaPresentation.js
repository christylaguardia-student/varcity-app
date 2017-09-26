import React, { Component } from 'react';
import { ButtonWithIcon } from '../app/FormControls';

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
          <div className="media-content">
            <p className="title is-4">{description}</p>
          </div>
        </div>
      </div>
    ) 
    : (
      <div className="card">
        <div className="card-image">
          <iframe title="description" width="100%" height="auto" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
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
      <MediaItem className="is-flex-mobile" key={i} description={item.description} mediaType={item.mediaType} videoUrl={item.videoUrl} imageUrl={item.imageUrl} onUpdate={onUpdate} />
    ));

    const displayNum = ( mediaArr < 1 ) ? 0 : itemNum + 1;

    return (
      <div className="content">
        <h1 className="title">Media Gallery</h1>
        <div className="columns level">
          <div className="column is-one-quarter is-pulled-left">
            <ButtonWithIcon text={'Left'} iconClass={'fa fa-arrow-left'} onClickFn={() => onUpdate(-1)} />
          </div>
          <div className="column">
            <p>{displayNum} of {mediaArr.length}</p>
            {mediaGallery[itemNum]}
          </div>
          <div className="column is-one-quarter">
            <p className="control is-pulled-right" onClick={() => onUpdate(1)}>
              <a className="button">
                <span className="icon is-small">
                  <i className={'fa fa-arrow-right'}></i>
                </span>
                <span>{'Right'}</span>
              </a>
            </p>
            {/* <ButtonWithIcon className="is-pulled-right" text={'Right'} iconClass={'fa fa-arrow-right'} onClickFn={() => onUpdate(1)} /> */}
          </div>
        </div>
      </div>
    );
  }
}