import React from 'react';

export default function InfoPresentation({ info }) {
  return (
    <div>
      {info ? <NoInfo /> : <HasInfo info={info}/>}
    </div>
  );
}

function HasInfo({ props }) {
  const age = getAge(props.dob);

  return (
    <div>
      <div className="columns level">

        <div className="column">
          <figure className="image is-3by2">
            <img src={props.profileUrl} alt="Profile" />
          </figure>
        </div>

        <div className="column">
          <div className="content">
            <h1>{props.firstName} {props.lastName}</h1>
          </div>

          <div>
            <span>
              <a className="icon is-medium" href={props.facebookUrl}>
                <i className="fa fa-facebook fa-lg"></i>
              </a>
            </span>
            <span>
              <a className="icon is-medium" href={props.twitterUrl}>
                <i className="fa fa-twitter fa-lg"></i>
              </a>
            </span>
            <span>
              <a className="icon is-medium" href={props.instagramUrl}>
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
                  <td>{props.primarySport || null} {props.position}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{props.gender}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>{props.height} {props.heightUom}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{props.weight} {props.weightUom}</td>
                </tr>
                <tr>
                  <td>Organization</td>
                  <td>{props.organization}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{props.city} {props.region} {props.country}</td>
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
