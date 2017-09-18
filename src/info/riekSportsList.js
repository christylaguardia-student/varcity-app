
let id = 0;
let sports = [];

const maleSports = [
  'Basketball',
  'Baseball',
  'Football',
  'Soccer',
  'Golf',
  'Wrestling',
  'Swimming',
  'Lacrosse',
  'Water Polo',
  'Track',
  'Volleyball',
  'Tennis'
];

const femaleSports = [
  'Basketball',
  'Softball',
  'Volleyball',
  'Soccer',
  'Golf',
  'Track',
  'Swimming',
  'Lacrosse',
  'Water Polo',
  'Gymnastics',
  'Tennis'
];

maleSports.forEach(sport => sports.push(
  { id: ++id, text: `${sport} - Boy's`},
  { id: ++id, text: `${sport} - Men's`}
));

femaleSports.forEach(sport => sports.push(
  { id: ++id, text: `${sport} - Girl's`},
  { id: ++id, text: `${sport} - Women's`}
));

export default sports.sort((a,b) => a.text > b.text ? 1 : -1)
