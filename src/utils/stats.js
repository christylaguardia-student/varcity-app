
const MEN = 'Men\'s';
const WOMEN = 'Women\'s';

export default {

  Basketball: {
    genders: [MEN, WOMEN],
    stats: [
      { Title: 'Game Played', Abbr: 'GP' },
      { Title: 'Games Started', Abbr: 'GS' },
      { Title: 'Minutes Per Game', Abbr: 'MPG' },
      { Title: 'Points Per Game', Abbr: 'PPG' },
      { Title: 'Field Goal %', Abbr: 'FG' },
      { Title: '3PT Field Goal %', Abbr: '3FG' },
      { Title: 'Free Throw %', Abbr: 'FT' },
      { Title: 'Rebounds Per Game', Abbr: 'RPG' },
      { Title: 'Assists Per Game', Abbr: 'APG' },
      { Title: 'Turnovers', Abbr: 'TO' },
      { Title: 'Steals', Abbr: 'S' },
      { Title: 'Blocks Per Game', Abbr: 'B' },
    ]
  },

  Volleyball: {
    genders: [WOMEN],
    stats: [
      { Title: 'Matches Played', Abbr: 'MP' },
      { Title: 'Started', Abbr: 'MP' },
      { Title: 'Sets Played', Abbr: 'SP' },
      { Title: 'Points Per Set', Abbr: 'PPS' },
      { Title: 'Kills Per Set', Abbr: 'KPS' },
      { Title: 'Assist Per Set', Abbr: 'APS' },
      { Title: 'Aces Per Set', Abbr: '' },
      { Title: 'Digs Per Set', Abbr: '' },
      { Title: 'Hitting %', Abbr: '' },
      { Title: 'Blocks Per Set', Abbr: 'BPS' },
      { Title: 'Errors Per Set', Abbr: 'EPS' },
    ]
  },

  Soccer: {
    genders: [MEN, WOMEN],
    stats: [
      { Title: 'Games Played', Abbr: 'GP' },
      { Title: 'Games Started', Abbr: 'GS' },
      { Title: 'Goals Per Game', Abbr: 'G' },
      { Title: 'Assist Per Game', Abbr: 'A' },
      { Title: 'Points', Abbr: '' },
      { Title: 'Shots', Abbr: '' },
      { Title: 'Shots %', Abbr: '' },
      { Title: 'Shots on Goal', Abbr: '' },
      { Title: 'Shots on Goal %', Abbr: '' },
      { Title: 'Game Winning Total', Abbr: 'GWG' },
      { Title: 'Minutes', Abbr: 'MIN' },
    ]
  },

  Baseball: {
    genders: [MEN],
    stats: [
      { Title: 'Games Played', Abbr: 'GP' },
      { Title: 'Batting Average', Abbr: 'Avg' },
      { Title: 'At Bats', Abbr: 'Abbr.' },
      { Title: 'Runs', Abbr: 'R' },
      { Title: 'Hits', Abbr: 'H' },
      { Title: 'Runs Batted In', Abbr: 'RBI' },
      { Title: 'Doubles', Abbr: '2B' },
      { Title: 'Triples', Abbr: '3B' },
      { Title: 'Home Run', Abbr: 'HR' },
    ]
  },

  Softball: {
    genders: [WOMEN],
    stats: [
      { Title: 'Games Played', Abbr: 'GP' },
      { Title: 'Batting Average', Abbr: 'Avg' },
      { Title: 'At Bats', Abbr: 'Abbr.' },
      { Title: 'Runs', Abbr: 'R' },
      { Title: 'Hits', Abbr: 'H' },
      { Title: 'Runs Batted In', Abbr: 'RBI' },
      { Title: 'Doubles', Abbr: '2B' },
      { Title: 'Triples', Abbr: '3B' },
      { Title: 'Home Run', Abbr: 'HR' },
    ]
  },

  Football: {
    genders: [MEN],
    stats: [
      { Title: 'Games Played', Abbr: 'GP' },
      { Title: 'Completions', Abbr: 'C' },
      { Title: 'Attempts (Passing)', Abbr: 'ATT' },
      { Title: 'Yards', Abbr: 'YDS' },
      { Title: 'Completion %', Abbr: 'C%' },
      { Title: 'Average', Abbr: 'AVG' },
      { Title: 'Passing Yards Per Game', Abbr: 'Y/G' },
      { Title: 'Completions Per Game', Abbr: 'C/G' },
      { Title: 'Touchdowns', Abbr: 'TD' },
      { Title: 'Touchdowns Per Game', Abbr: 'TD/G' },
      { Title: 'Interception', Abbr: 'INT' },
      { Title: 'Carries Per Game', Abbr: 'CAR' },
      { Title: 'Yards', Abbr: 'YDS' },
      { Title: 'Average Yard Per Carry', Abbr: 'AYC' },
      { Title: 'Reception', Abbr: 'REC' },
    ]
  }
};
