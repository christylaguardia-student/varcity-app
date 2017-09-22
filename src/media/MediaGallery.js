import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import 'bulma/css/bulma.css';
// import PropTypes from 'prop-types';
import { TextSelect, TextArea, UrlInput, Toggle, ToggleEditMode, TextInput } from '../app/FormControls';
import { updateMedia, getMedia } from './actions';

// GalleryItem.propTypes = {
//   description: PropTypes.string.isRequired,
//   mediaType: PropTypes.string.isRequired,
//   videoUrl: PropTypes.string,
//   image: PropTypes.object,
//   // onRemove: PropTypes.func.isRequired
// }


let value = '';
let mediaItem = { description: '', mediaType: '', videoUrl: '', image: '' };

export function GalleryItem({ onImageChange, onImageSubmit, onSelect, holdData, options, select, description, videoUrl = '', image = '', mediaType, rotateGallery }) {

  return (
    <div className="galleryView">
        <img src={image} alt={description} />
        {/* <button onClick={() => onRemove(item)} >X</button> */}
        <div className="is-grouped is-grouped-multiline">
          <TextInput className="select" value={select} propName="mediaType" label="Media Type" change={onSelect} options={options} disabled={false} />
          {select.text === 'video link' &&
            <UrlInput value={value} propName="videoUrl" label="Video Link" change={holdData} disabled={false} />
          }

          {/* image file upload */}
          <form className="field" encType="multipart/formData" onSubmit={e => onImageSubmit(e)}>
            {select.text === 'image upload' &&
              <div className="file">
                <label className="file-label">
                  <input className="file-input" type="file" name="imageUrl" onChange={e => onImageChange(e)} />
                  <span className="file-cta">
                    <span className="icon file-icon">
                      <i className="fa fa-upload"></i>
                    </span>
                    <span className="file-label">
                      Choose a file...
                    </span>
                  </span>
                </label>
              </div>
            }
          </form>
          <TextArea value={value} propName="description" label="Description" change={holdData} disabled={false} />
        </div>
      <button className="submitButton" type="submit" onClick={e => onImageSubmit(e)}>Upload Image</button>
    </div>
  );
}

export class MediaGallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemNum: 0,
      image: '',
      select: { id: "0", text: "Select media type" },
      selectOptions: [
        { id: "0", text: "Select the media type" },
        { id: "1", text: "video link" },
        { id: "2", text: "image upload" }
      ]
    }
    // this.rotateGallery = this.rotateGallery.bind(this);
    this.handleImageSubmit = this.handleImageSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.holdData = this.holdData.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.props.getMedia(123);
  }
  
  handleImageSubmit(e) {
    e.preventDefault();
    console.log('handlImageSubmit', mediaItem);
    // let image = new FormData();
    this.props.updateMedia(123, mediaItem);
  }

  // referenced: https://codepen.io/hartzis/pen/VvNGZP?editors=0011
  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.holdData({ image: reader.result });
      // this.setState({
        // image: reader.result      
      };
      reader.readAsArrayBuffer(file);
  }

  rotateGallery(incr) {
    // const itemCount = this.props.items.length;
    // let newItem = this.state.itemNum + incr;
    // if (newItem === itemCount) newItem = 0;
    // else if (newItem === -1) newItem = itemCount - 1;
    // this.setState({ itemNum: newItem });
  }

  holdData(value) {
    let result = '';
    if(value.mediaType) result = value.mediaType.text;
    else result = Object.values(value)[0];
    mediaItem[Object.keys(value)] = result;
    if (mediaItem.mediaType === 'video link') mediaItem.image = '';
    else if (mediaItem.mediaType === 'image upload') mediaItem.videoUrl = '';
    console.log('mediaItem is', mediaItem);
  }

  onSelect(value) {
    console.log('value in onSelect is', value.mediaType);
    this.setState({ select: value.mediaType })
    this.holdData(value);
  }

  render() {
    // const { items } = this.props;
    const { itemNum, rotateGallery, select, selectOptions } = this.state;
    // const itemGallery = items.map((item, i) => (
    //   <GalleryItem key={i} image={item} description={item.description} videoUrl={item.url} mediaType={item.mediaType} rotateGallery={rotateGallery} select={select} options={selectOptions}/>
    // ));
    return (
      <div className="field">
        {/* <ToggleEditMode value="edit" propName="edit" change={this.holdData} disabled={false} /> */}

        <div className="tile">
          <GalleryItem rotateGallery={rotateGallery} select={select} options={selectOptions} holdData={this.holdData} onSelect={this.onSelect} onImageSubmit={this.handleImageSubmit} onImageChange={this.handleImageChange} image={this.state.image}/>
          {/* {itemGallery[itemNum]} */}
          {/* <nav id="galleryNav">
            <button onClick={() => rotateGallery(-1)}>&laquo; Previous</button> <button onClick={() => rotateGallery(1)}>Next &raquo;</button>
            <p>item {itemNum + 1} of {items.length}</p>
          </nav> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return ({
    media: state.items
  })
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getMedia, updateMedia }, dispatch);
// }

const mapDispatchToProps = { getMedia, updateMedia };

export default connect(mapStateToProps, mapDispatchToProps, 
  // (state, dispatch, own) => {
  // return {
  //   media: 
  // }
// }
)(MediaGallery);
