import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div className="footer">
      <div className="content has-text-centered">
        <p>Varcity Network &copy;2017</p>
        <p><small><Link to="/terms">Terms of Use</Link></small></p>
        <p>
          <span className="icon is-large">
            <a href="https://github.com/varcity-network/">
              <i className="fa fa-github fa-2x"></i>
            </a>
          </span>
          <span className="icon is-large">
            <a href="mailto:info@varcitynetwork.com">
              <i className="fa fa-envelope fa-2x"></i>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
