const  {calcular} = require('../public/js/scripts.js')

// Crie um mock para simular o DOM
document.body.innerHTML = `
  <div>
    <p id="resultado"></p>
  </div>
`;

// Testes Jest
describe('Função calcular()', () => {
  test('Deve calcular corretamente quando há um resultado', () => {
    // Defina o valor do elemento #resultado
    document.getElementById('resultado').innerHTML = '2+2';

    // Chame a função calcular
    calcular();

    // Verifique se o resultado foi calculado corretamente
    expect(document.getElementById('resultado').innerHTML).toBe('4');
  });

  test('Deve mostrar "Nada para calcular" quando não há resultado', () => {
    // Defina o valor do elemento #resultado como vazio
    document.getElementById('resultado').innerHTML = '';

    // Chame a função calcular 
    calcular();

    // Verifique se a mensagem "Nada para calcular" foi exibida.
    expect(document.getElementById('resultado').innerHTML).toBe('Nada para calcular');
  });
});