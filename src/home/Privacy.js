import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <section>
      <div className="padded-container columns">
        <div className="column"></div>

        <div className="column is-two-thirds container is-fluid">
          <div className="content is-medium is-centered">
            <h1>Privacy Policy</h1>
            <p>At-bat arm pine tar pickoff rhubarb, leadoff fielder's choice. Plate cookie slide pull golden sombrero in the hole double play. Golden sombrero batter's box stretch arm force center field off-speed red sox. Around the horn pennant left field left field hardball pickoff small ball. Knuckleball 1-2-3 butcher boy friendly confines rubber game shortstop flyout. League scorecard hall of fame at-bat airmail glove skipper.</p>
            <p>Gold glove corner golden sombrero silver slugger outfield walk off foul. Peanuts hey batter tag tapper assist, foul wrigley arm. Blue corner away reliever second baseman rhubarb slide loogy. Appeal rhubarb hot dog backstop pennant bases loaded outs error. Can of corn chin music southpaw pinch hitter good eye baseline rainout slugging play. Leadoff starter mustard cup of coffee hit by pitch retire hot dog force.</p>
          
            <div className="has-text-centered">
              <Link to="/terms">Read the Terms of Use</Link>
            </div>
          
          </div>
        </div>

        <div className="column"></div>
      </div>
    </section>
  );
}
