import React from 'react';

export default function Card({ user }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-128x128">
          <img
            src={user.profileUrl || '../images/default-profile.png'}
            alt="profile picture"
          />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">
          <a href={`/athletes/${user._id}`}>
            {user.firstName} {user.lastName}
          </a>
        </p>
        <p className="title is-5">{user.primarySport}</p>
        <p className="title is-6">{user.position}</p>
        <p className="subtitle is-6">
          {user.location.city}, {user.location.state || ''}{' '}
          {user.location.country}
        </p>
        <p className="subtitle is-6">
          <span className="button is-small">
            <a href={user.facebookUrl}>
              <i className="fa fa-facebook fa-lg" />
            </a>
          </span>
          <span className="button is-small">
            <a href={user.twitterUrl}>
              <i className="fa fa-twitter fa-lg" />
            </a>
          </span>
        </p>
        <div className="subtitle is-6">
          <div className="content">{user.awards}</div>
          <div className="content">{user.about}</div>
        </div>
      </div>
    </div>
  );
}
