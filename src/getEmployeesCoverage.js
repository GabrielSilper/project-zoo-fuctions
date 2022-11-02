const data = require('../data/zoo_data');

const { species, employees } = data;

function getAllEmployeesCoverage() {
  return employees.map((employee) => {
    const { id, firstName, lastName, responsibleFor } = employee;
    return {
      id,
      fullName: `${firstName} ${lastName}`,
      species: responsibleFor.map((elem) => species
        .find((specie) => specie.id === elem).name),
      locations: responsibleFor.map((elem) => species
        .find((specie) => specie.id === elem).location),
    };
  });
}

function getEmployeeCoverageByName(name) {
  const verify = getAllEmployeesCoverage().some((elem) => elem.fullName.includes(name));
  if (verify === false) {
    throw new Error('Informações inválidas');
  }
  return getAllEmployeesCoverage().find((elem) => elem.fullName.includes(name));
}

function getEmployeeCoverageByID(id) {
  const verify = getAllEmployeesCoverage().some((elem) => elem.id === id);
  if (verify === false) {
    throw new Error('Informações inválidas');
  }
  return getAllEmployeesCoverage().find((elem) => elem.id === id);
}

function getEmployeesCoverage(object) {
  if (typeof object === 'object') {
    const { name, id } = object;
    if (name !== undefined) {
      return getEmployeeCoverageByName(name);
    }
    if (id !== undefined) {
      return getEmployeeCoverageByID(id);
    }
  }
  return getAllEmployeesCoverage();
}

module.exports = getEmployeesCoverage;
