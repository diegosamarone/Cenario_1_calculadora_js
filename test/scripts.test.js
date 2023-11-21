const  {insert, clean, back, calcular} = require('../public/js/scripts.js')

// Crie um mock para simular o DOM
document.body.innerHTML = `
  <div>
    <p id="resultado"></p>
  </div>
`;

//Testes para a função insert (entrada de números)
describe('Função insert()', () => {
  test('Deve adicionar números corretamente', () => {
    insert(1);
    expect(document.getElementById('resultado').innerHTML).toBe('1');

    insert(2);
    expect(document.getElementById('resultado').innerHTML).toBe('12');
  });
});


describe('Função insert()', () => {
  test('Deve adicionar números corretamente', () => {

    clean();
    insert('-');
    insert(2);
    expect(document.getElementById('resultado').innerHTML).toBe('-2');

  });
});



//Testes para a função calcular
describe('Função calcular()', () => {
  test('Deve calcular corretamente quando há um resultado', () => {

    const operacao = '+';
    const num_1 = 2;
    const numero = 2;
    const resultado = calcular(operacao, num_1, numero);

    expect(resultado).toBe(4);
  });
});



//Testes para a função clean (limpar números)
describe('Função clean()', () => {
test('Deve limpar os números corretamente', () => {

  insert(1);
  insert(2);

  clean();
  expect(document.getElementById('resultado').innerHTML).toBe('');

});
});


//Testes para a função back (remover último número):
describe('Função back()', () => {
test('Deve remover o último número corretamente', () => {

  insert(1);
  insert(2);
  expect(document.getElementById('resultado').innerHTML).toBe('12');
  
  back();
  expect(document.getElementById('resultado').innerHTML).toBe('1');
});


});