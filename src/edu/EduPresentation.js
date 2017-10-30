import React from 'react';

export default function EduPresentation({ schools, testScores }) {

  return (
    <div className="content">
      <h1 className="title">Education</h1>
      <ul>
        {schools.map((school, i) => <School key={i} institution={school.institution} year={school.year} country={school.country} city={school.city} state={school.state} degree={school.degree} /> )}
      </ul>
      <br/>
      <h1 className="title">Testing</h1>
      <table className="table">
        <tbody>
          <tr>
            <th>Test</th>
            <th>Reading</th>
            <th>Writing</th>
            <th>Math</th>
            <th>Science</th>
            <th>History</th>
            <th>Language</th>
          </tr>
          <tr>
            <td>SAT</td>
            <td>{testScores.satReading}</td>
            <td>{testScores.satWriting}</td>
            <td>{testScores.satMath}</td>
            <td> - </td>
            <td> - </td>
            <td> - </td>
          </tr>
          <tr>
            <td>ACT</td>
            <td>{testScores.actReading}</td>
            <td>{testScores.actWriting}</td>
            <td>{testScores.actMath}</td>
            <td>{testScores.actScience}</td>
            <td> - </td>
            <td> - </td>
          </tr>
          <tr>
            <td>IB</td>
            <td> - </td>
            <td> - </td>
            <td>{testScores.actMath}</td>
            <td>{testScores.actScience}</td>
            <td>{testScores.ibHistory}</td>
            <td>{testScores.ibLanguage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function School({ school }) {
  return (
    <li className="box">
      <ul>
        <li><strong>{school.institution}</strong></li>
        <li>{school.degree} ({school.year})</li>
        <li>{school.city}, {school.state} {school.country}</li>
      </ul>
    </li>
  );
}
