import React from 'react';
import { Link } from 'react-router-dom';


export default function GlobalHeader({ id, authorized }) {
  console.log(1, id, authorized);

  return (
    <div className="border">
      <div>Global header!</div>
      <div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <input placeholder="search" />
            </li>
            <li>
              <Link to="/athletes">Search</Link>
            </li>
            <li>
              <Link to="/athletes/:id">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}