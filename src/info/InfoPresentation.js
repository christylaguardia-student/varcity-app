import React from 'react';
// import { Link } from 'react-router-dom';

export default function InfoPresentation({ info }) {
  console.log(8888, info)
  return (
    <div>
      {info ? <HasInfo props={info}/> : <NoInfo /> }
    </div>
  );
}

function HasInfo({ props }) {
  console.log(944444444, props)
  let age = null;
  if (props.person.dob) age = getAge(props.person.dob);

  return (
    <div>
      <div className="columns level">

        <div className="column">
          <figure className="image is-square">
            <img src={props.profileUrl} alt="Profile" />
          </figure>
        </div>

        <div className="column">
          <div className="content">
            <h1 className="title">{props.firstName} {props.lastName}</h1>
          </div>

          <div>
            <span className="icon is-medium">
              <a href={props.socials.facebookUrl}>
                <i className="fa fa-facebook fa-lg"></i>
              </a>
            </span>
            <span className="icon is-medium">
              <a href={props.socials.twitterUrl}>
                <i className="fa fa-twitter fa-lg"></i>
              </a>
            </span>
            <span className="icon is-medium">
              <a href={props.socials.instagramUrl}>
                <i className="fa fa-instagram fa-lg"></i>
              </a>
            </span>
          </div>

          <div>
            <table className="table">
              <tbody>
                <tr>
                  <td>Age</td>
                  <td>{age}</td>
                </tr>
                <tr>
                  <td>Sport</td>
                  <td>{props.primarySport} {props.primarySportGender} {props.position}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>{props.person.height} {props.person.heightUom}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{props.person.weight} {props.person.weightUom}</td>
                </tr>
                <tr>
                  <td>Organization</td>
                  <td>{props.organization}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{props.location.city} {props.location.region} {props.location.country}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
      <div className="column box content">
        <p>{props.about}</p>
        <p>{props.awards}</p>
      </div>
    </div>
  );
}

function NoInfo() {
  return (
    <div className="main-container">
      <div className="notification is-primary">
        <h2>Uh oh! We have no info to show.</h2>
      </div>
    </div>
  );
}

function getAge(dob) {
  if (!dob) return 0;

  dob = new Date(dob);
  const diffMS = Date.now() - dob.getTime();
  const ageDate = new Date(diffMS);
  const years = Math.abs(ageDate.getUTCFullYear() - 1970);

  return `${years} years old`;
}
