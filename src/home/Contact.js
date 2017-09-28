import React from 'react';

export default function Contact() {
  return (
    <section>
      <div className="padded-container columns">
        <div className="column"></div>
        
        <div className="column is-two-thirds container is-fluid">
          <div className="content is-medium is-centered">
            <h1>Contact Us</h1>
            <p>Your ideas and suggestions help us to constantly improve Varcity’s features.</p>
            <p>Let us know how we can improve your experience.</p>
            <p><a href="mailto:info@varcitynetwork.com">info@varcitynetwork.com</a></p>
          </div>
        </div>
        
        <div className="column"></div>
      </div>
    </section>
  );
}
