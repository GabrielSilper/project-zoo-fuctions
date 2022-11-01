const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsQtt = { child: 0, adult: 0, senior: 0 };
  return entrants.reduce((acum, current) => {
    if (current.age < 18) {
      entrantsQtt.child += 1;
    } else if (current.age >= 18 && current.age < 50) {
      entrantsQtt.adult += 1;
    } else if (current.age >= 50) {
      entrantsQtt.senior += 1;
    }
    return entrantsQtt;
  }, entrantsQtt);
}

const { prices } = data;

function calculateEntry(entrants) {
  if (typeof entrants !== 'object' || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrantsQtt = countEntrants(entrants);
  const total = Object.entries(entrantsQtt);
  return total.map((elem) => prices[elem[0]] * elem[1])
    .reduce((acum, current) => acum + current, 0);
}

module.exports = { calculateEntry, countEntrants };
