import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import PropTypes from 'prop-types';
import { TextSelect, TextArea, UrlInput } from '../app/FormControls';

GalleryItem.propTypes = {
  description: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired,
  videoUrl: PropTypes.string,
  image: PropTypes.object,
  // onRemove: PropTypes.func.isRequired
}

// just do this for now
function httpCallback() { console.log('pretending to make api call') }
let value = '';

export function GalleryItem({ options, select, description, videoUrl = '', image = '', mediaType, onUpdate }) {
  console.log('select is', select);

  return (
    <div className="galleryView">
      <img src={image} alt={description} />
      {/* <button onClick={() => onRemove(item)} >X</button> */}
      <div className="is-grouped is-grouped-multiline">
        <TextSelect className="select" value={select} propName="mediaType" label="Media Type" change={httpCallback} options={options} />
        {select.text === 'video link' &&
        <UrlInput value={value} propName="videoUrl" label="Video Link" change={httpCallback} />
        }
        {select.text === 'image upload' &&
        <div className="file">
          <label className="file-label">
            <input className="file-input" type="file" name="imageUrl" />
            <span className="file-cta">
              <span className="icon file-icon">
                <i class="fa fa-upload"></i>
              </span>
              <span class="file-label">
                Choose a file...
              </span>
            </span>
          </label>
        </div>
        }
        <TextArea value={value} propName="description" label="Description" change={httpCallback} />
      </div>
    </div>
  );
}

export class MediaGallery extends Component {

  constructor(props) {
    super(props);
    this.state={
      select: { id: "0", text: "video link" },
      selectOptions: [
        { id: "0", text: "video link" }, 
        { id: "1", text: "image upload" }
        ]
    };
  }

  static propTypes = {
    galleryArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    // onRemove: PropTypes.func.isRequired
  }

  render() {
    // const { galleryArray, onUpdate, itemNum } = this.props;
    // const itemGallery = galleryArray.map((item, i) => (
    //   <GalleryItem key={i} item={item} description={item.description} url={item.url} onUpdate={onUpdate} />
    // ));
    return (
      <div className="tile">
        {/* <nav id="galleryNav">
          <button onClick={() => onUpdate(-1)}>&laquo; Previous</button> <button onClick={() => onUpdate(1)}>Next &raquo;</button>
          <p>item {itemNum + 1} of {itemGallery.length}</p>
        </nav>
        {itemGallery[itemNum]} */}
        <GalleryItem select={this.state.select} options={this.state.selectOptions}/>
      </div>
    );
  }
}