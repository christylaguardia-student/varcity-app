import React from 'react';

const testimonials = [
  {
    image: '/images/testimonials/Avery-Horn.png',
    author: 'Avery Horn RB #34',
    team: 'Michigan Wolverines',
    quote: '"Playing outside your home state, Varcity allows you to keep your family and friends updated throughout your career."'
  },{
    image: '/images/testimonials/Barrett-Luxhoj.png',
    author: 'Barrett Luxhoj DF #2',
    team: 'Virginia Military Institute',
    quote: '"Recruiting is a competitive market, having a professional community to connect with sets you apart from the competition."'
  },{
    image: '/images/testimonials/Erik-Komatsu.png',
    author: 'Erik Komatsu OF #25',
    team: 'Minnesota Twins',
    quote: '"The ability to portray yourself as a professional on and off the field is key to your athletic success."'
  },{
    image: '/images/testimonials/Elijah-Swan.png',
    author: 'Elijah Swan PG #14',
    team: 'Philippine Basketball Association',
    quote: '"Varcity allows an athlete to take control of his or her athletic future. Don’t wait or depend on others for your success."'
  }
];

export default function Testimonials() {
  return (
    <section>
      <div className="content">
        <h1 className="centered-title">What they're saying about Varcity Network</h1>
        <div className="columns content">
          <div className="column">
            <Testimony testimony={testimonials[0]}/>
            <Testimony testimony={testimonials[1]}/>
          </div>
          <div className="column">
            <Testimony testimony={testimonials[2]}/>
            <Testimony testimony={testimonials[3]}/>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimony({ testimony }) {
  return (
    <div className="card is-level">
      <div className="card-content">
        <p className="subtitle is-4"><em>{testimony.quote}</em></p>
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={testimony.image} alt={testimony.author} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{testimony.author}</p>
            <p className="subtitle is-6">{testimony.team}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
