const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  return employees.map((employee) => employee.managers)
    .reduce((acum, current) => acum.concat(current), []).some((manager) => manager === id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((elem) => elem.managers.some((manager) => manager === managerId))
    .map((elem) => `${elem.firstName} ${elem.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
