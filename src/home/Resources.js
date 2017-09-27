import React from 'react';

const recruiting = [
  { title: 'NCAA Eligibility Center', url: 'https://web3.ncaa.org/ecwr3/' },
  { title: 'NCAA Graduation Rates', url: 'http://www.ncaa.org/about/resources/research/graduation-rates' },
  { title: 'ballislife', url: 'http://ballislife.com/' }
];

const education = [
  { title: 'Janet\'s Planet', url: 'http://janetsplanet.com/' }
];

const other = [
  { title: 'GoodNewsNetwork', url: 'https://www.goodnewsnetwork.org/'},
];

export default function Resources() {
  return (
    <section>
      <div className="padded-container columns">
        <div className="column"></div>
        
        <div className="column is-two-thirds container is-fluid">
          <div className="content is-medium is-centered">
            <h1>Recruiting</h1>
            <ul>
              {recruiting.map((item, index) => <ListItem key={index} item={item} />)}
            </ul>
            <h1>Education</h1>
            <ul>
              {education.map((item, index) => <ListItem key={index} item={item} />)}
            </ul>
            <h1>Other</h1>
            <ul>
              {other.map((item, index) => <ListItem key={index} item={item} />)}
            </ul>

          </div>
        </div>
        
        <div className="column"></div>
      </div>
    </section>







    // <div className="Content">
    //   <h1>Recruiting</h1>
    //   <ul>
    //     {recruiting.map((item, index) => <ListItem key={index} item={item} />)}
    //   </ul>
    //   <h1>Education</h1>
    //   <ul>
    //     {education.map((item, index) => <ListItem key={index} item={item} />)}
    //   </ul>
    //   <h1>Other</h1>
    //   <ul>
    //     {other.map((item, index) => <ListItem key={index} item={item} />)}
    //   </ul>
    // </div>

  );
}

function ListItem({ item }) {
  return (
    <li>
      <a href={item.url}>
        {item.title}
      </a>
    </li>
  );
}