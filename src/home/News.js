import React from 'react';

const newsItems = [
  { time: '2min', text: 'Foul red sox center field skipper basehit on deck inside baseline.' },
  { time: '48min', text: 'Robbed extra innings double switch pinch hit tigers strike zone interleague foul season. Strike zone dead ball era baseline helmet can of corn at-bat cracker jack.' },
  { time: '3 hr', text: '4-bagger pickoff peanuts mound scorecard outfield designated hitter interleague leather.' },
  { time: '1 day', text: 'Friendly confines shift starting pitcher right fielder bleeder, peanuts strikeout. Hardball bat inside alley wrigley home play tossed.' },
  { time: '4 days', text: 'Hack sacrifice bunt hit by pitch manager plunked slider count cookie.' },
  { time: '2 weeks', text: 'Pine tar triple-A sidearm inning walk off take fall classic. Bunt at-bat second baseman bullpen nubber base outs pinch hitter rainout. Doubleheader force plunked field rally alley cubs. Mustard walk off practice bench 4-bagger bunt right fielder. Shift play can of corn peanuts curve, sacrifice ejection bush league.' }
];

export default function News() {
  return (
    <section>
      <div className="padded-container columns">
        <div className="column"></div>
        
        <div className="column is-two-thirds container is-fluid">
          <div className="content is-medium is-centered">
            <h1>News</h1>
            {newsItems.map((news, index) => <NewsItem key={index} news={news} />)}

          </div>
        </div>
        
        <div className="column"></div>
      </div>
    </section>
  );
}

function NewsItem({ news }) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-content">

          <div className="content">
            <p>
              <strong>Varcity Network</strong> <small>@varcity</small> <small>{news.time}</small>
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