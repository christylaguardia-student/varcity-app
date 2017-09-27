import React from 'react';
import { Dropdown, TextArea, UrlInput } from '../app/FormControls';
import Preview from './Preview';

export default function MediaForm({ props,onSubmit, onChange }) {
  const { description, mediaType, videoUrl, imageUrl } = props;

  return (
    <div className="columns">
      <div className="column">
      <p className="is-size-3">Add a new media item to your gallery</p>

        <div className="is-grouped is-grouped-multiline">
          <Dropdown value={mediaType} prop="mediaType" label="Media Type" change={onChange} options={['Image Link', 'Video Link']} />

          {mediaType === 'Image Link' &&
            <UrlInput prop="imageUrl" value={imageUrl} label="Image Link" change={onChange} />
          }

          {mediaType === 'Video Link' &&
            <UrlInput prop="videoUrl" value={videoUrl} label="Video Link" change={onChange} />
          }
          {mediaType === 'Video Link' &&
          <div className="notification"><strong>Note: Paste the "embed" link above for best results. For example, under a youtube video, click "share", then "embed", and copy and paste the link shown.</strong></div>
          }

          <form className="field" encType="multipart/formData" onSubmit={e => onSubmit(e)}>
            <TextArea value={description} prop="description" label="Description" change={onChange} />
            <button className="submitButton" type="submit" value="Save" onClick={e => onSubmit(e)}>Add Media</button>
          </form>
        </div>
        <Preview description={description} mediaType={mediaType} videoUrl={videoUrl} imageUrl={imageUrl}/>
      </div>
    </div>
  );
}
