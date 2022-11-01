const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { species } = data;
  const { residents } = species.find((elem) => elem.name === animal);
  return residents.every((elem) => elem.age > age);
}

module.exports = getAnimalsOlderThan;
