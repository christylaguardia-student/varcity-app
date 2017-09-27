import React from 'react';

export default function SportPresentation({ sports }) {
  return (
    <div>
      <h1 className="title">Sports</h1>
      {sports.map((sport, index) => <SportTbl key={index} sport={sport} />)}
    </div>
  );
}

function SportTbl({ sport }) {
  return (
    <div className="content">
      <h3>{sport.sport}</h3>
      <p>{sport.position}</p>
      <p>{sport.organization}</p>
      <p>{sport.seasonStart} - {sport.seasonEnd}</p>
      <br/>
      
      <table className="table">
        <tbody>
          <AbbrRow stats={sport.stats} />
          <ValueRow stats={sport.stats} />
        </tbody>
      </table>
    </div>
  );
}

function AbbrRow({ stats }) {
  return (
    <tr>
      {stats.map((stat, index) => <td key={index}>{stat.abbr}</td> )}
    </tr>
  );
}

function ValueRow({ stats }) {
  return (
    <tr>
      {stats.map((stat, index) => <td key={index}>{stat.value}</td> )}
    </tr>
  );
}


//<tr>{s.stats.map((stat, i) => <th key={i}>{stat.statTitle}</th>)}</tr>
//<tr>{s.stats.map((stat, i) => <th key={i}>{stat.statScore}</th>)}</tr>