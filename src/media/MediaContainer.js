import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
import { MediaGallery } from './MediaGallery';

class MediaContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemNum: 0
    };

    const onUpdate = function (incr) {
      const itemCount = this.state.items.length;
      let newItem = this.state.itemNum + incr;
      if (newItem === itemCount) newItem = 0;
      else if (newItem === -1) newItem = itemCount-1;
      this.setState ({ itemNum: newItem });
    }
  }

  // componentDidMount() {
  //   fetch('/api/athletes/:id/media')
  //     .then(res => res.json())
  //     .then(items => this.setState({ items }))
  //     .catch(error => console.log(error));
  // }

  render() {
    return (
      <div className="column is-mobile">
        <h1>Media Container</h1>
        <MediaGallery onUpdate={this.onUpdate}/>
      </div>
    )
  }
}

export default MediaContainer;
