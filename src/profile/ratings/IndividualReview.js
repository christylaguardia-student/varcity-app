import React from 'react';

export default function IndividualReview({ name, review }) {
  return (
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src="/images/default-profile.png" alt={name} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            {name}
            <br/>
            <em>"{review}"</em>
          </p>
        </div>
      </div>
    </article>
  );
}