import React from 'react';

export default function InfoPresentation({ info }) {
  const profileUrl = info.profileUrl || '';
  const firstName = info.firstName || '';
  const lastName = info.lastName || '';
  const primarySport = info.primarySport || '';
  const position = info.position || '';
  const organization = info.organization || '';
  const country = info.country || '';
  const region = info.region || '';
  const city = info.city || '';
  const gender = info.gender || '';
  const height = info.height || '';
  const heightUom = info.heightUom || '';
  const weight = info.weight || '';
  const weightUom = info.weightUom || '';
  const about = info.about || '';
  const awards = info.awards || '';
  const facebookUrl = info.facebookUrl || '';
  const twitterUrl = info.twitterUrl || '';
  const instagramUrl = info.instagramUrl || '';
  const age = info.person.dob ? getAge(info.person.dob) : null;

  return (
    <div>
      <div className="columns level">
        <div className="column">
          <figure className="image is-3by2">
            <img src={profileUrl} alt="Profile" />
          </figure>
        </div>

        <div className="column">
          <div className="content">
            <h1>{firstName} {lastName}</h1>
          </div>

          <div>
            <span>
              <a className="icon is-medium" href={facebookUrl}>
                <i className="fa fa-facebook fa-lg"></i>
              </a>
            </span>
            <span>
              <a className="icon is-medium" href={twitterUrl}>
                <i className="fa fa-twitter fa-lg"></i>
              </a>
            </span>
            <span>
              <a className="icon is-medium" href={instagramUrl}>
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
                  <td>{primarySport || null} {position}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{gender}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>{height} {heightUom}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{weight} {weightUom}</td>
                </tr>
                <tr>
                  <td>Organization</td>
                  <td>{organization}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{city} {region} {country}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
      <div className="column box content">
        <p>{about}</p>
        <p>{awards}</p>
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
