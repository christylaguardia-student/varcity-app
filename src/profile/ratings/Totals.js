import React from 'react';

export default function Totals() {
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td>Character</td>
            <td><Stars /></td>
          </tr>
          <tr>
            <td>Competitiveness</td>
            <td><Stars /></td>
          </tr>
          <tr>
            <td>Offense</td>
            <td><Stars /></td>
          </tr>
          <tr>
            <td>Defense</td>
            <td><Stars /></td>
          </tr>
          <tr>
            <td>Mental Toughness</td>
            <td><Stars /></td>
          </tr>
          <tr>
            <td>College Game Readiness</td>
            <td><Stars /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


function Stars() {
  const randomNum = Math.floor(Math.random() * 5) + 1;
  let stars = [];

  for (let i=0; i<randomNum; i++) {
    stars.push(<i key={i} className="fa fa-star fa-2x"></i>);
  }

  return (
    <span>
      <p>
        {stars.map((star, index) => <span key={index}>{star}</span>)}
      </p>
    </span>
  );
}