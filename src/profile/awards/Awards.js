import React from 'react';

const awards = [
  { name: 'Lorem ipsum dolor sit amet', year: 2017 },
  { name: 'Consectetur adipiscing elit', year: 2017 },
  { name: 'Integer nec odio', year: 2016 },
  { name: 'Sed cursus ante dapibus diam', year: 2015 },
];

const achievements = [
  { name: 'Integer nec odio', year: 2017 },
  { name: 'Consectetur adipiscing elit', year: 2016 },
  { name: 'Sed cursus ante dapibus diam', year: 2014 },
  { name: 'Lorem ipsum dolor sit amet', year: 2014 },
];

export default function Awards() {
  return (
    <section>
      <h1>Awards</h1>
      {awards.map((award, index) => <Award key={index} award={award} />)}
      <h1>Achievements</h1>
      {achievements.map((achievement, index) => <Achievement key={index} achievement={achievement} />)}
    </section>
  );
}

function Award({ award }) {
  return (
    <div>
      <p>
        <span className="icon is-large">
          <i className="fa fa-trophy" aria-hidden="true"></i>
        </span>
        {award.year} {award.name}
      </p>
    </div>
  );
}

function Achievement({ achievement }) {
  return (
    <div>
      <p>
        <span className="icon is-large">
          <i className="fa fa-star" aria-hidden="true"></i>
        </span>
        {achievement.year} {achievement.name}
      </p>
    </div>
  );
}