import React from 'react';

const newsItems = [
  {
    name: 'Justin L.',
    address: '@jlott',
    time: '5min',
    text: 'Foul red sox center field skipper basehit on deck inside baseline.'
  },{
    name: 'Wendy B.',
    address: '@wendth',
    time: '8min',
    text: 'Robbed extra innings double switch pinch hit tigers strike zone interleague foul season. Strike zone dead ball era baseline helmet can of corn at-bat cracker jack.'
  },{
    name: 'Pierre S.',
    address: '@pierres',
    time: '3 hr',
    text: '4-bagger pickoff peanuts mound scorecard outfield designated hitter interleague leather.'
  },{
    name: 'Stephanie F.',
    address: '@s.e.v.',
    time: '1 day',
    text: 'Friendly confines shift starting pitcher right fielder bleeder, peanuts strikeout. Hardball bat inside alley wrigley home play tossed.'
  },{
    name: 'Christy L.',
    address: '@gottabeagle',
    time: '4 days',
    text: 'Fake news! Hack sacrifice bunt hit by pitch manager plunked slider count cookie.'
  }
];

export default function News() {
  return (
    <section>
      <div className="content is-medium is-centered">
        {newsItems.map((news, index) => <NewsItem key={index} news={news} />)}
      </div>
    </section>
  );
}

function NewsItem({ news }) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="/images/default-profile.png" alt={news.name} />
          </figure>
        </div>
        <div className="media-content">

          <div className="content">
            <p>
              <strong>{news.name}</strong> <small>{news.address}</small> <small>{news.time}</small>
              <br />
              {news.text}
            </p>
          </div>
          
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small"><i className="fa fa-reply"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fa fa-retweet"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fa fa-heart"></i></span>
              </a>
            </div>
          </nav>

        </div>
      </article>
    </div>
  );
}