import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import 'bulma/css/bulma.css';
// import PropTypes from 'prop-types';
import { Dropdown, TextArea, TextInput } from '../app/FormControls';
import { updateMedia, getMedia } from './actions';

export function GalleryItem({ onChange, onSubmit, props, onImageChange, rotateGallery }) {

  const { description, mediaType, videoUrl, image } = props;
  let imageUrl = null;
  if (image) {
    const arrayView = new Uint8Array(image);
    const blob = new Blob([arrayView], { type: "image/jpeg" });
    imageUrl = image && URL.createObjectURL(blob);
  }
  return (
    <div className="galleryView">
      {imageUrl && (mediaType === 'Image Upload') &&
        <img src={imageUrl} alt={description} />
      }
        {/* <button onClick={() => onRemove(item)} >X</button> */}
        <div className="is-grouped is-grouped-multiline">
          <Dropdown value={mediaType} prop="mediaType" label="Media Type" change={onChange} options={['Video Link', 'Image Upload']} />

          {mediaType === 'Video Link' &&
            <TextInput prop="videoUrl" value={videoUrl} label="Video Link" change={onChange} />
          }

          {/* image file upload */}
          <form className="field" encType="multipart/formData" onSubmit={e => onSubmit(e)}>
            {mediaType === 'Image Upload' &&
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
          <TextArea value={description} prop="description" label="Description" change={onChange} />
        </div>
      <button className="submitButton" type="submit" onClick={e => onSubmit(e)}>Add Media</button>
    </div>
  );
}

export class MediaGallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemNum: 0,
      mediaItem: { 
        description: '', 
        mediaType: 'Video Link', 
        videoUrl: '', 
        image: ''
      }
    };
    // this.rotateGallery = this.rotateGallery.bind(this);
    // this.handleImageSubmit = this.handleImageSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setImage = this.setImage.bind(this);
    // this.holdData = this.holdData.bind(this);
    // this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    // this.props.getMedia(123);
  }
  
  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
    mediaItem: { ...this.state.mediaItem, [name]: value }
    });
  }

  setImage (buf) {
    this.setState({
      mediaItem: { ...this.state.mediaItem, image: buf }
    });
    console.log('in setImage, mediaItem is', this.state.mediaItem);
  }

  handleSubmit(e) {
    e.preventDefault();
    let mediaToSend = this.state.mediaItem;
    console.log('mediaItem is in handleSubmit', this.state.mediaItem);
    if (mediaToSend.mediaType === 'Video Link') mediaToSend.image = '';
    else if (mediaToSend.mediaType === 'Image Upload') mediaToSend.videoUrl = '';
    console.log('mediaItem about to send is', this.state.mediaItem);
    // this.props.updateMedia(this.props.currentId, this.state.mediaItem, 'media');
  }

  // referenced: https://codepen.io/hartzis/pen/VvNGZP?editors=0011
  handleImageChange(e) {
    e.preventDefault();
    const { files } = e.target;
    if(!files.length) return;
    let reader = new FileReader();
    let file = files[0];
    reader.onloadend = () => {
      this.setImage(reader.result);
    }
    reader.readAsArrayBuffer(file);
  }

  // handleImageChange(e) {
  //   e.preventDefault();

  //   let reader = new FileReader();
  //   let file = e.target.files[0];
  //   reader.onloadend = () => {
  //     this.holdData({ image: reader.result });
  //     // this.setState({
  //       // image: reader.result      
  //     };
  //     reader.readAsArrayBuffer(file);
  // }

  // rotateGallery(incr) {
    // const itemCount = this.props.items.length;
    // let newItem = this.state.itemNum + incr;
    // if (newItem === itemCount) newItem = 0;
    // else if (newItem === -1) newItem = itemCount - 1;
    // this.setState({ itemNum: newItem });
  // }

  // holdData(value) {
  //   let result = '';
  //   if(value.mediaType) result = value.mediaType.text;
  //   else result = Object.values(value)[0];
  //   mediaItem[Object.keys(value)] = result;
  //   if (mediaItem.mediaType === 'video link') mediaItem.image = '';
  //   else if (mediaItem.mediaType === 'image upload') mediaItem.videoUrl = '';
  //   console.log('mediaItem is', mediaItem);
  // }

  // onSelect(value) {
  //   console.log('value in onSelect is', value.mediaType);
  //   this.setState({ select: value.mediaType })
  // }

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
          <GalleryItem rotateGallery={rotateGallery} onImageChange={this.handleImageChange} onSubmit={this.handleSubmit} onChange={this.handleChange} props={this.state.mediaItem} />
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
