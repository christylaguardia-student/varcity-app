import React from 'react';

export default function About() {
  return (
    <div className="padded-container columns">
      <div className="column">
      </div>

      <div className="column is-two-thirds container is-fluid">
        <div className="content is-medium is-centered">

          <h1 className="centered-title">A new kind of social network.</h1>


          <div>
            <div className="box">
              <p className="subtitle">
                "Varcity gives student athletes the power to build community and connect.
                It celebrates how our <strong>athletic and educational</strong> identities inspire us, support us, and help us discover the world."
                <br /><em> - Justin Lott</em>
              </p>
            </div>
          </div>

          <h2>How it works.</h2>
          <ul>
            <li>Join the community.</li>
            <li>Make a kick-ass profile.</li>
            <li>Find opportunities.</li>
          </ul>

          {/* <div className="has-text-centered"><a className="button is-medium is-primary is-outlined">Sign Up</a></div> */}

          <h2>Contact us.</h2>
          <p>Your ideas and suggestions help us to constantly improve Varcity’s features. Let us know how we can improve your experience.</p>
          <p><a href="info@varcitynetwork.com">info@varcitynetwork.com</a></p>
        </div>
      </div>

      <div className="column">
      </div>
    </div>
  );
}
