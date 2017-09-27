import React from 'react';

const connections = [
  {
    name: 'Justin Lott',
    title: 'Founder of Varcity Network'
  },{
    name: 'Christy La Guardia',
    title: 'JavaScript Developer at Wieden+Kennedy'
  },{
    name: 'Wendy Beck',
    title: 'Sr. Developer at New Relic'
  },{
    name: 'Pierre Salumu',
    title: 'CTO of Microsoft Security'
  },{
    name: 'Stephanie Fitzgerald',
    title: 'Software Engineer at Learning Games, Inc.'
  }
];

export default function Connections() {
  return (
    <section>
      {connections.map((con, index) => <Connection name={con.name} title={con.title} />)}
    </section>
  );
}


function Connection({ name, title }) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-top">
          <figure className="image is-64x64">
            <img src="/images/default-profile.png" alt={name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong>
              <br/>
              {title}
            </p>
          </div>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <p className="button is-primary is-outlined">Message</p>
          </div>
        </nav>
      </article>
    </div>
  );
}