import React from 'react';
import 'bulma/css/bulma.css';

export default function About() {
  return (
    <div className="content is-medium">
      <h1>A new kind of social network.</h1>
      <blockquote>
        <p className="subtitle">"Varcity gives student athletes the power to build community and connect. It celebrates how our <strong>athletic and educational</strong> identities inspire us, support us, and help us discover the world." <em>- Justin Lott</em></p>
      </blockquote>
      
      {/* <p>The Varcity Network celebrates how our athletic and educational identities inspire us, support us, and help us discover the world through community connection.</p> */}
      
      <h1>How it works.</h1>
      <ul>
        <li>Join the community.</li>
        <li>Make a kick-ass profile.</li>
        <li>Find opportunities.</li>
      </ul>

      {/* <div className="has-text-centered"><a className="button is-medium is-primary is-outlined">Sign Up</a></div> */}

      <h1>Contact us.</h1>
      <p>Your ideas and suggestions help us to constantly improve Varcity’s features. Let us know how we can improve your experience.</p>
      <p><a href="info@varcitynetwork.com">info@varcitynetwork.com</a></p>
    </div>
  );
}
