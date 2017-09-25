import React from 'react';


export default function Card({user}) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-square">
          <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          {/* <div className="media-left">
            <figure className="image is-48x48">
              <img src="http://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
          </div> */}
          <div className="media-content">
            <p className="title is-4"><a href={`/athletes/${user._id}`}>{user.firstName} {user.lastName}</a></p>
            <p className="subtitle is-6">
              <span className="button is-small"><i className="fa fa-futbol-o fa-lg"></i></span>
              <span className="button is-small"><i className="fa fa-facebook fa-lg"></i></span>
              <span className="button is-small"><i className="fa fa-twitter fa-lg"></i></span>
              <span className="button is-small"><i className="fa fa-instagram fa-lg"></i></span>
            </p>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="">#css</a> <a href="">#responsive</a>
          <br />
          <p>11:09 PM - 1 Jan 2016</p>
        </div>
      </div>
    </div>
  );
}
