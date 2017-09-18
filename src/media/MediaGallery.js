import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import PropTypes from 'prop-types';
import { TextInput, TextArea, UrlInput } from '../app/FormControls';


GalleryItem.propTypes = {
  description: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired,
  videoUrl: PropTypes.string,
  image: PropTypes.object,
  // onRemove: PropTypes.func.isRequired
}

// just do this for now
function httpCallback() { console.log('pretending to make api call') }
const value = '';

export function GalleryItem({ description, videoUrl = '', image = '', mediaType, onUpdate }) {
  return (
    <div className="galleryView file">
      {/* <UrlInput className="file-input" type="file" name="item" value={value} propName="image" label="image" change={httpCallback} /> */}
      <img src={image} alt={description} />
      <TextInput value={value} propName="mediaType" label="Media Type" change={httpCallback}/>
      <TextArea value={value} propName="description" label="Description" change={httpCallback} />
      {/* <button onClick={() => onRemove(item)} >X</button> */}
    </div>
  );
}

export function AddItem({ onAdd }) {
    return (
        <div className="file">
            <form onSubmit={event => {
                event.preventDefault();
                const form = event.target;
                {/* const { title, description, url } = form.elements;
                onAdd(title.value, description.value, url.value); */}
                form.reset();
            }}>
                <label className="file-label" htmlFor="description">Title:</label>
                <input className="file-input" type="file" id="description" name="description" required /> 
                <label htmlFor="description">Description:</label>
                <input id="description" name="description" required /> 
                <label htmlFor="url">url:</label>
                <input id="url" name="url" required /> 
                <button type="submit">Add Bunny</button>
            </form>
        </div>
    );
}

export class MediaGallery extends Component {

  static propTypes = {
    galleryArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    // onRemove: PropTypes.func.isRequired
  }

  render() {
    const { galleryArray, onUpdate, itemNum } = this.props;
    const itemGallery = galleryArray.map((item, i) => (
      <GalleryItem key={i} item={item} description={item.description} url={item.url} onUpdate={onUpdate} />
    ));
    return (
      <div className="tile is-vertical">
        <nav id="galleryNav">
          <button onClick={() => onUpdate(-1)}>&laquo; Previous</button> <button onClick={() => onUpdate(1)}>Next &raquo;</button>
          <p>item {itemNum + 1} of {itemGallery.length}</p>
        </nav>
        {itemGallery[itemNum]}
        <AddItem />
      </div>
    );
  }
}