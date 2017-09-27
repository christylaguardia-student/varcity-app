import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ user }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-128x128">
          <img
            src={user.profileUrl || '../images/default-profile.png'}
            alt="user profile pic"
          />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">
          <Link to={`/athletes/${user._id}`}>
            {user.firstName} {user.lastName}
          </Link>
        </p>
        <p className="title is-6">{user.primarySportGender}</p>
        <p className="title is-5">{user.primarySport}</p>
      </div>
    </div>
  );
}
