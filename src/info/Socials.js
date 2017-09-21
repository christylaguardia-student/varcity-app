import React from 'react';
import { UrlInput } from '../app/FormControls';

export function SocialsEditor(socials, onChange) {
  return (
    <div className="is-grouped is-grouped-multiline">
      <UrlInput value={socials.facebookUrl} propName="facebookUrl" label="Facebook" change={onChange} disabled={false} />
      <UrlInput value={socials.twitterUrl} propName="twitterUrl" label="Twitter" change={onChange} disabled={false} />
      <UrlInput value={socials.instagramUrl} propName="instagramUrl" label="Instagram" change={onChange} disabled={false} />
    </div>
  );
}

export function SocialsPresentation(socials) {
  return (
    <div className="content has-text-centered">
      <span>
        <a className="icon" href={socials.facebookUrl}>
          <i className="fa fa-facebook fa-2x"></i>
        </a>
      </span>
      <span>
        <a className="icon" href={socials.twitterUrl}>
          <i className="fa fa-twitter fa-2x"></i>
        </a>
      </span>
      <span>
        <a className="icon" href={socials.instagramUrl}>
          <i className="fa fa-instagram fa-2x"></i>
        </a>
      </span>
    </div>
  );
}
