const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsObjects() {
  return {
    NE: species.filter((elem) => elem.location === 'NE'),
    NW: species.filter((elem) => elem.location === 'NW'),
    SE: species.filter((elem) => elem.location === 'SE'),
    SW: species.filter((elem) => elem.location === 'SW'),
  };
}

function getAllAnimalMap() {
  const { NE, NW, SE, SW } = getAnimalsObjects();
  return {
    NE: NE.map((elem) => elem.name),
    NW: NW.map((elem) => elem.name),
    SE: SE.map((elem) => elem.name),
    SW: SW.map((elem) => elem.name),
  };
}

function getAnimalMapWithNames() {
  const { NE, NW, SE, SW } = getAnimalsObjects();
  const bringNames = (location) => location.map((elem) => {
    const names = {};
    names[elem.name] = elem.residents.map((resid) => resid.name);
    return names;
  });
  return {
    NE: bringNames(NE),
    NW: bringNames(NW),
    SE: bringNames(SE),
    SW: bringNames(SW),
  };
}

function getAnimalMapSorted() {
  const { NE, NW, SE, SW } = getAnimalsObjects();
  const sortNames = (location) => location.map((elem) => {
    const names = {};
    names[elem.name] = elem.residents.map((resid) => resid.name).sort();
    return names;
  });
  return {
    NE: sortNames(NE),
    NW: sortNames(NW),
    SE: sortNames(SE),
    SW: sortNames(SW),
  };
}

function getAnimalMapSex(sex) {
  const { NE, NW, SE, SW } = getAnimalsObjects();
  const filterSex = (location) => location.map((elem) => {
    const names = {};
    names[elem.name] = elem.residents
      .filter((resid) => resid.sex === sex)
      .map((animal) => animal.name);
    return names;
  });
  return {
    NE: filterSex(NE),
    NW: filterSex(NW),
    SE: filterSex(SE),
    SW: filterSex(SW),
  };
}

function getAnimalMapSexSorted(sex) {
  const { NE, NW, SE, SW } = getAnimalsObjects();
  const filterSexSorted = (location) => location.map((elem) => {
    const names = {};
    names[elem.name] = elem.residents
      .filter((resid) => resid.sex === sex)
      .map((animal) => animal.name).sort();
    return names;
  });
  return {
    NE: filterSexSorted(NE),
    NW: filterSexSorted(NW),
    SE: filterSexSorted(SE),
    SW: filterSexSorted(SW),
  };
}

function cases({ sorted, sex }) {
  if (sorted === true && sex !== undefined) {
    return getAnimalMapSexSorted(sex);
  }
  if (sorted === true) {
    return getAnimalMapSorted();
  }
  if (sex !== undefined) {
    return getAnimalMapSex(sex);
  }
  return getAnimalMapWithNames();
}

function getAnimalMap(options) {
  if (typeof options === 'object') {
    const { includeNames } = options;
    if (includeNames === true) {
      return cases(options);
    }
  }
  return getAllAnimalMap();
}

module.exports = getAnimalMap;
