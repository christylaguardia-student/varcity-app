import React from 'react';
import { UrlInput } from '../app/FormControls';

export function ProfileImgEditor(profileUrl, onChange) {
  return (
    <div>
      <UrlInput
        value={profileUrl}
        propName="profileUrl"
        label="Profile Picture"
        change={onChange}
        disabled={false} />
    </div>
  );
}

export function ProfileImgPresentation(profileUrl) {
  return (
    <div class="image is-4by3">
      <img src={profileUrl} alt="Profile" />
    </div>
  );
}
