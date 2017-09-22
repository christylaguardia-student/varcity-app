import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaForm from './MediaForm';
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
    </div>
  );
}

export function ToggleEditor({ editModeOn, toggleFn }) {
  const iconClass = editModeOn ? 'fa fa-times fa-lg' : 'fa fa-pencil fa-lg';
  const buttonText = editModeOn ? 'Close' : 'Edit Your Profile';
  
  return (
    <div>
      <p className="control" onClick={toggleFn}>
        <a className="button">
          <span className="icon is-small">
            <i className={iconClass}></i>
          </span>
          <span>{buttonText}</span>
        </a>
      </p>
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
      },
      editModeOn: false,
      editAllowed: this.props.authId === this.props.currentId
    };
    this.rotateGallery = this.rotateGallery.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setImage = this.setImage.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  componentDidMount() {
    console.log('currentId is', this.props.currentId);
    this.props.getMedia(this.props.currentId);
  }
  
  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      mediaItem: { ...this.state.mediaItem, [name]: value }
    });
  }

  setImage (buf) {
    console.log('in setImage mediaItem is', this.state.mediaItem);
    this.setState({
      mediaItem: { ...this.state.mediaItem, image: buf }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const media = this.props.athletes[this.props.currentId].media ? this.props.athletes[this.props.currentId].media : []; 
    // console.log('media is', media);
    // let mediaToSend = {};
    // mediaToSend.media = [...media, this.state.mediaItem];
    let mediaToSend = this.state.mediaItem;
    if (mediaToSend.mediaType === 'Video Link') delete mediaToSend.image;
    else if (mediaToSend.mediaType === 'Image Upload') delete mediaToSend.videoUrl;
    console.log('currentid is', this.props.currentId, 'mediatosend is', mediaToSend);
    this.props.updateMedia(this.props.currentId, mediaToSend);
  }

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

  toggleEditMode() {
    if (this.state.editAllowed) {
      const newState = this.state.editModeOn ? false : true;
      this.setState({
        editModeOn: newState
      });
    }
  }

  rotateGallery(incr) {
    const athlete = this.props.athletes[this.props.currentId];  
    console.log('athlete is', athlete);
    const itemCount = athlete.media.length || 0;
    let newItem = this.state.itemNum + incr;
    if (newItem === itemCount) newItem = 0;
    if (newItem === -1) newItem = itemCount - 1;
    else if (athlete.media.length === 0) newItem = 0;
    this.setState({ itemNum: newItem });
  }


  render() {
    const athlete = this.props.athletes[this.props.currentId];
    console.log('athlete is', athlete);
    const { itemNum, rotateGallery } = this.state;
    let items = athlete.media || [];
    const itemGallery = items.map((item, i) => (
      <GalleryItem key={i} image={item} description={item.description} videoUrl={item.url} mediaType={item.mediaType} rotateGallery={rotateGallery} props={this.state.mediaItem}/>
    ));
    return (
      <div>
        {!athlete &&
          <p>Loading...</p>
        }
        {athlete && athlete.media &&
        <div>
          {this.state.editAllowed ? <ToggleEditor editModeOn={this.state.editModeOn} toggleFn={this.toggleEditMode} /> : null}
          {this.state.editModeOn
            ? <MediaForm onImageChange={this.handleImageChange} onSubmit={this.handleSubmit} onChange={this.handleChange} props={this.state.mediaItem} />
            : itemGallery[itemNum]}
          {!this.state.editModeOn && athlete.media &&
            <nav>
              <button className="button" onClick={() => this.rotateGallery(-1)}>&laquo; Previous</button>
              <button className="button" onClick={() => this.rotateGallery(1)}>Next &raquo;</button>
              <p>item {itemNum + 1} of {athlete.media.length}</p>
            </nav>
          }
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
    authId: state.authId,
    // media: state.athletes.media,
    athletes: state.athletes
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
    getMedia: (id) => {
      dispatch(getMedia(id));
    },
    updateMedia: (id, data) => {
      dispatch(updateMedia(id, data));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      currentId: ownProps.location.pathname.split('/athletes/')[1].split('/media')[0],
    };
  })(MediaGallery);
