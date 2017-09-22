
import React from 'react';
const defaultSports = [
  {
    sport: 'Baseball',
    organization: 'Alchemy Code Team',
    position: 'Left Field',
    stats: [
      {
        statTitle: 'GP',
        statScore: 95,
      },
      {
        statTitle: 'A',
        statScore: 23,
      },
      {
        statTitle: 'B',
        statScore: 92,
      },
      {
        statTitle: 'C',
        statScore: 23,
      },
    ],
    seasonDates: '2016-2017'
  },
  {
    sport: 'Baseball',
    organization: 'Code Fellows PDX Team',
    position: 'Right Field',
    stats: [
      {
        statTitle: 'GP',
        statScore: 2,
      },
      {
        statTitle: 'A',
        statScore: 43,
      },
      {
        statTitle: 'B',
        statScore: 2,
      },
      {
        statTitle: 'C',
        statScore: 22,
      },
    ],
    seasonDates: '2015-2016'
  }
];

export default function SportPresentation() {

  return (
    <div className="content">
      <h1 className="title">Sports</h1>
      {defaultSports.map((s, i) => <Sport s={s} key={i} />)}
    </div>
  );
}

function Sport({ s }) {
  return (
    <div>
      <h3>{s.sport}</h3>
      <p>{s.organization}</p>
      <p>{s.position}</p>
      <p>{s.seasonDates}</p>
      <br/>
      
      <table className="table">
        <tbody>
          {s.stats.map((st, i) => <StatRow key={i} stat={st}/> )}
        </tbody>
      </table>
    </div>
  );
}

function StatRow({ stat }) {
  return (
    <tr>
      <td>{stat.statTitle}</td>
      <td>{stat.statScore}</td>
    </tr>
  );
}


//<tr>{s.stats.map((stat, i) => <th key={i}>{stat.statTitle}</th>)}</tr>
//<tr>{s.stats.map((stat, i) => <th key={i}>{stat.statScore}</th>)}</tr>