const data = require('../data/zoo_data');

const { hours } = data;
const { species } = data;
const arrayHours = Object.entries(hours);
function getAllSchedule() {
  // Fazendo o objeto com os dias da semana como chave e com seus respectivos officeHour e exhibition, caso não seja passado nenhum parâmetro ou nenhum parâmetro aceitável vou retorna-lo
  const schedule = {};
  return arrayHours.reduce((acum, current) => {
    if (current[0] === 'Monday') {
      schedule[current[0]] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
      return schedule;
    }
    const officeHour = `Open from ${current[1].open}am until ${current[1].close}pm`;
    const exhibition = species
      .filter((specie) =>
        specie.availability.some((elem) => elem === current[0]))
      .map((elem) => elem.name);
    schedule[current[0]] = { officeHour, exhibition };
    return schedule;
  }, {});
}

function getDaySchedule(scheduleTarget) {
  const allDays = Object.entries(getAllSchedule());
  const daySelected = {};
  allDays.forEach((day) => {
    if (day[0] === scheduleTarget) {
      const key = day[0];
      const value = day[1];
      daySelected[key] = value;
    }
  });
  return daySelected;
}

function getSchedule(scheduleTarget) {
  // Fazendo as verificações dos parârametros e retornando o que se pede caso seja um animal ou um dia da semana
  const paramIsAAnimal = species.some(
    (specie) => specie.name === scheduleTarget,
  );
  const paramIsADay = scheduleTarget in getAllSchedule();

  if (paramIsAAnimal) {
    return species.find((elem) => elem.name === scheduleTarget).availability;
  }

  if (paramIsADay) {
    return getDaySchedule(scheduleTarget);
  }

  return getAllSchedule();
}

console.log(getDaySchedule('Sunday'));

module.exports = getSchedule;
