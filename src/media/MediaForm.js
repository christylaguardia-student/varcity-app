import React from 'react';
import { TextInput, Checkbox, DateInput, Dropdown, NumberInput, TextArea, UrlInput } from '../app/FormControls';

export default function MediaForm({ id, props, onImageChange, onSubmit, onChange }) {
  const { description, mediaType, videoUrl, imageUrl } = props;

  return (
    <div className="columns">
      <div className="column">

        <div className="is-grouped is-grouped-multiline">
          <Dropdown value={mediaType} prop="mediaType" label="Media Type" change={onChange} options={['Image Link', 'Video Link']} />

          {mediaType === 'Image Link' &&
            <TextInput prop="imageUrl" value={imageUrl} label="Image Link" change={onChange} />
          }

          {mediaType === 'Video Link' &&
            <TextInput prop="videoUrl" value={videoUrl} label="Video Link" change={onChange} />
          }

          <form className="field" encType="multipart/formData" onSubmit={e => onSubmit(e)}>
            {/* {mediaType === 'Image Upload' &&
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
            } */}
            <TextArea value={description} prop="description" label="Description" change={onChange} />
            <button className="submitButton" type="submit" value="Save" onClick={e => onSubmit(e)}>Add Media</button>
          </form>
        </div>
      </div>
    </div>
  );
}
