const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  return employees.reduce((acum, current) => {
    const vefiry = current.firstName === employeeName || current.lastName === employeeName;
    return vefiry ? current : acum;
  }, {});
}

module.exports = getEmployeeByName;
