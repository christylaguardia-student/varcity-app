import stats from './stats';

function getSportsWithGenders() {
  const sports = Object.keys(stats);
  const sportsWithGenders = [];
  let id = 0;

  sports.forEach(sport => {
    stats[sport].genders.forEach(gender => {
      sportsWithGenders.push({ id: id++, text: `${sport} - ${gender}` });
    });
  });
  
  sportsWithGenders.sort((a,b) => a.text > b.text ? 1 : -1);

  return sportsWithGenders;
}

export default getSportsWithGenders();
