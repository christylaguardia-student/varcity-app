import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MediaForm from './MediaForm';
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
        <figure className="image is-128x128">
          <img className="image" src={imageUrl} alt={description} />
        </figure>
      }
        {/* <button onClick={() => onRemove(item)} >X</button> */}
        
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
    if (mediaToSend.mediaType === 'Video Link') mediaToSend.image = '';
    else if (mediaToSend.mediaType === 'Image Upload') mediaToSend.videoUrl = '';
    this.props.updateMedia(this.props.currentId, this.state.mediaItem);
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
          <MediaForm onImageChange={this.handleImageChange} onSubmit={this.handleSubmit} onChange={this.handleChange} props={this.state.mediaItem} />
          
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

// toggleEditMode() {
//   if (this.state.editAllowed) {
//     const newState = this.state.editModeOn ? false : true;
//     this.setState({
//       editModeOn: newState
//     });
//   }
// }

// render() {
//   // this.updateInitialState();
//   return (
//     <div>
//       {this.state.editAllowed ? <ToggleEditor editModeOn={this.state.editModeOn} toggleFn={this.toggleEditMode} /> : null }
//       {this.state.editModeOn
//         ? <InfoEditor id={this.props.currentId} props={this.state.info} change={this.handleOnChange} save={this.handleOnSave} />
//         : <InfoPresentation info={this.state.info} /> }
//     </div>
//   );
// }
// }

// function ToggleEditor({ editModeOn, toggleFn }) {
// const iconClass = editModeOn ? 'fa fa-times fa-lg' : 'fa fa-pencil fa-lg';
// const buttonText = editModeOn ? 'Close' : 'Edit Your Profile';

// return (
//   <div>
//     <p className="control" onClick={toggleFn}>
//       <a className="button">
//         <span className="icon is-small">
//           <i className={iconClass}></i>
//         </span>
//         <span>{buttonText}</span>
//       </a>
//     </p>
//   </div>
// );
// }



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
