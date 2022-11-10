/* 
    Nesta aula vimos sobre a biblioteca MathJs. Uma biblioteca de cálculos matemáticos.

    https://www.w3schools.com/js/js_math.asp

    <==DICA =>

    Podemos pegar a raiz quadrada de um número da seguinte maneira: 
    
    num1 = 9 
    let resultado = (num1 ** (1/2)) ou (num1 ** (0.5)).

    No JavaScript podemos dividir por "0" o que nós retorna um valor "Infinity" com boolean de "true".
*/

let num1 = 9.23214

console.log('==========================================================================')
console.log(`${num1} Arredondado Para Baixo Fica Igual a ${Math.floor(num1)}`) // Arredonda para baixo
console.log(`${num1} Arredondado Para Cima Fica Igual a ${Math.ceil(num1)}`) // Arredonda para cima
console.log(`${num1} Arredondado Para o Número Mais Próximo Fica Igual a ${Math.round(num1)}`) // Arredonda para número mais próximo
console.log(`O Maior Número da Sequencia 1, 6, 9, 3, 100 é o Número ${Math.max(1, 6, 9, 3, 100)}`) // Exibe o maior número da sequencia
console.log(`O Menor Número da Sequencia 1, 6, 9, 3, 100 é o Número ${Math.min(1, 6, 9, 3, 100)}`) // Exibe o menor número da sequencia
console.log(`Gera Um Número Aleatório Entre 0 e 1: ${(Math.random().toFixed(2))}`) // Exibe um número aleatório entre 0 - 1
console.log('==========================================================================')