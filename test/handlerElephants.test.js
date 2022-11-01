const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se não receber parâmetros retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se receber uma string como parâmetros fora dos padrões retorna Null', () => {
    expect(handlerElephants('Qualquer coisa')).toBeNull();
  });
  it('Testa se não receber uma string como parâmetro retorna "Parâmetro inválido, é necessário uma string"', () => {
    const stringShow = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(3)).toBe(stringShow);
  });
  it('Testa se receber "count" como parâmetro retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se receber "names" como parâmetro retorna um array com os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se receber "averageAge" como parâmetro retorna 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Testa se receber "id" como parâmetro retorna bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
  it('Testa se receber "name" como parâmetro retorna elephants', () => {
    expect(handlerElephants('name')).toBe('elephants');
  });
  it('Testa se receber "popularity" como parâmetro retorna 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Testa se receber "location" como parâmetro retorna NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Testa se receber "availability" como parâmetro retorna os dias da semana que está podendo visitar os elefantes', () => {
    const availability = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(availability);
  });
  it('Testa se receber "residents" como parâmetro retorna um array com objetos de elefantes', () => {
    const residents = [
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ];
    expect(handlerElephants('residents')).toEqual(residents);
  });
});
