const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animal = employees.find((employee) => employee.id === id).responsibleFor[0];
  const olderAnimal = species.find((specie) => specie.id === animal).residents
    .reduce((acum, current) => (acum.age > current.age ? acum : current));
  const { name, sex, age } = olderAnimal;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
