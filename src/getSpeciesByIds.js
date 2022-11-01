const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const { species } = data;
  return species.reduce((acum, curr) => {
    ids.forEach((id) => {
      if (curr.id === id) {
        acum.push(curr);
      }
    });
    return acum;
  }, []);
}

module.exports = getSpeciesByIds;
