const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const animals = {};
    return species.reduce((acum, current) => {
      animals[current.name] = current.residents.length;
      return animals;
    }, {});
  }
  const { specie, sex } = animal;
  if (sex === undefined) {
    return species.find((elem) => elem.name === specie).residents.length;
  }
  return species.find((elem) => elem.name === specie).residents
    .filter((elem) => elem.sex === sex).length;
}

module.exports = countAnimals;
