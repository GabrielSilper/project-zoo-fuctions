const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se não for passado parâmetro retorna um objeto com os dias e horários', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Testa se não for passado um dia válido retorna um erro', () => {
    expect(() => getOpeningHours('Não válido', '09:00-AM')).toThrow(/^The day must be valid. Example: Monday/);
  });
  it('Testa se não for passado um horário como parametro retorna um erro', () => {
    expect(() => getOpeningHours('Thursday', 'Horário inválida')).toThrow(/^The hour should represent a number/);
  });
  it('Testa se não for passado uma hora válida retorna um erro', () => {
    expect(() => getOpeningHours('Thursday', '31:00-AM')).toThrow(/^The hour must be between 0 and 12/);
  });
  it('Testa se não for passado abreviação AM ou PM retorna um erro', () => {
    expect(() => getOpeningHours('Thursday', '11:00-nãoVálido')).toThrow(/^The abbreviation must be 'AM' or 'PM'/);
  });
  it('Testa se não for passado um minuto válido retorna um erro', () => {
    expect(() => getOpeningHours('Thursday', '11:70-AM')).toThrow(/^The minutes must be between 0 and 59/);
  });
  it('Testa se for passado Monday no primeiro parâmetro retorna que o Zoo está fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Testa se for passado dias da semana diferente de Monday e horario fora do prazo retorna Zoo fechado', () => {
    expect(getOpeningHours('Thursday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Testa se for passado dias da semana diferente de Monday e horario dentro do prazo retorna Zoo Aberto', () => {
    expect(getOpeningHours('Thursday', '11:00-AM')).toEqual('The zoo is open');
  });
});
