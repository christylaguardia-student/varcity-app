import React from 'react';

export default function SportPresentation({ sports }) {
  return (
    <div className="content">
      <h1 className="title">Sports</h1>
      {sports.map((sport, index) => <SportTbl key={index} sport={sport} />)}
    </div>
  );
}

function SportTbl({ sport }) {
  return (
    <div className="content">
      <h3>{sport.sport}</h3>
      <p>{sport.position} for {sport.organization}</p>
      <table className="table">
        <thead>
          <tr>
            <th colSpan={sport.stats.length}>Stats {sport.seasonStart} - {sport.seasonEnd}</th>
          </tr>
        </thead>
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
      {stats.map((stat, index) => <th key={index}>{stat.abbr}</th> )}
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
