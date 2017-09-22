import React from 'react';

const defaultEdu = {
  schools: [
    {
      institution: 'Alchemy Code Lab', 
      year: 2017, 
      country: 'United States', 
      city: 'Portland', 
      state: 'Oregon', 
      degree: 'Full-Stack JavaScript',
    },
    {
      institution: 'Portland State University', 
      year: 2007, 
      country: 'United States', 
      city: 'Portland', 
      state: 'Oregon', 
      degree: 'Mechanical Engineering',
    },
    {
      institution: 'David Douglas High School', 
      year: 2005, 
      country: 'United States', 
      city: 'Portland', 
      state: 'Oregon', 
      degree: 'Diploma',
    }
  ],
  satReading: '1020', 
  satWriting: '1090', 
  satMath: '1100',

  actMath: '1140', 
  actReading: '1290', 
  actScience: '1030', 
  actWriting: '1200', 

  ibHistory: '1130', 
  ibLanguage: '1120', 
  ibMath: '1100', 
  ibScience: '1110'
};


export default function EduPresentation({ props }) {
  if (!props) props = defaultEdu;

  return (
    <div className="content">
      <h1 className="title">Education</h1>
      <ul>
        {defaultEdu.schools.map(school => <School school={school} /> )}
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
            <td>{props.satReading}</td>
            <td>{props.satWriting}</td>
            <td>{props.satMath}</td>
            <td> - </td>
            <td> - </td>
            <td> - </td>
          </tr>
          <tr>
            <td>ACT</td>
            <td>{props.actReading}</td>
            <td>{props.actWriting}</td>
            <td>{props.actMath}</td>
            <td>{props.actScience}</td>
            <td> - </td>
            <td> - </td>
          </tr>
          <tr>
            <td>IB</td>
            <td> - </td>
            <td> - </td>
            <td>{props.actMath}</td>
            <td>{props.actScience}</td>
            <td>{props.ibHistory}</td>
            <td>{props.ibLanguage}</td>
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