import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaForm from './MediaForm';
import { MediaPresentation } from './MediaPresentation';
import { Dropdown, TextArea, TextInput, ToggleEditor } from '../app/FormControls';
import { updateMedia, getMedia } from './actions';

export class MediaGallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemNum: 0,
      mediaItem: { 
        description: '', 
        mediaType: 'Image Link', 
        videoUrl: '', 
        imageUrl: ''
      },
      editModeOn: false,
      editAllowed: this.props.authId === this.props.currentId
    };
    // this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.setImage = this.setImage.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.rotateGallery = this.rotateGallery.bind(this);
  }

  componentDidMount() {
    this.props.getMedia(this.props.currentId);
  }

  rotateGallery(incr) {
    const athlete = this.props.athletes[this.props.currentId];
    const mediaLength = athlete.media.length;
    let newItem = this.state.itemNum + incr;
    if (newItem === mediaLength) newItem = 0;
    else if (newItem === -1) newItem = mediaLength - 1;
    this.setState ({ itemNum: newItem });
}

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      mediaItem: { ...this.state.mediaItem, [name]: value }
    });
  }

  // setImage (buf) {
  //   this.setState({
  //     mediaItem: { ...this.state.mediaItem, image: buf }
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();
    // const media = this.props.athletes[this.props.currentId].media ? this.props.athletes[this.props.currentId].media : []; 
    // console.log('media is', media);
    // let mediaToSend = {};
    // mediaToSend.media = [...media, this.state.mediaItem];
    let mediaToSend = this.state.mediaItem;
    if (mediaToSend.mediaType === 'Video Link') delete mediaToSend.imageUrl;
    else if (mediaToSend.mediaType === 'Image Link') delete mediaToSend.videoUrl;
    this.props.updateMedia(this.props.currentId, mediaToSend);
  }

  // handleImageChange(e) {
  //   e.preventDefault();
  //   const { files } = e.target;
  //   if(!files.length) return;
  //   let reader = new FileReader();
  //   let file = files[0];
  //   reader.onloadend = () => {
  //     this.setImage(reader.result);
  //   }
  //   reader.readAsArrayBuffer(file);
  // }

  toggleEditMode() {
    if (this.state.editAllowed) {
      const newState = this.state.editModeOn ? false : true;
      this.setState({
        editModeOn: newState
      });
    }
  }

  render() {
    const athlete = this.props.athletes[this.props.currentId];
    return (
      <div>
        {!athlete &&
          <p>Loading...</p>
        }
        {athlete && athlete.media &&
          <div>
            {this.state.editAllowed
              ? <ToggleEditor text="Media" editModeOn={this.state.editModeOn} toggleFn={this.toggleEditMode} />
              : null}
            {this.state.editModeOn
              ? <MediaForm onImageChange={this.handleImageChange} onSubmit={this.handleSubmit} onChange={this.handleChange} props={this.state.mediaItem}/>
              : <MediaPresentation mediaArr={athlete.media} onUpdate={this.rotateGallery} itemNum={this.state.itemNum} />}
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
