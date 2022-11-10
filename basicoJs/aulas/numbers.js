/* 
    Nesta aula vimos mais sobre o tipo primitivo "Number". 
    
    Podemos usar o toString() onde converte o tipo "number" para "string"

    Podemos definir quantas casas decimais serão exibidas usando o atributo toFixed().

    Podemos também utilizar o atributo Number.isInteger() para retornar true ou false se é um número inteiro.

    Podemos utilizar o Number.isNaN() para verificar se um número é valido, retornando true ou false.

    Uma prática para fazer atribuições no JS seria utilizando o "+=".
*/

let num1 = 1 // Number
let num2 = 0.752312312 // Number
let nome = 'Olá'
let resultado = 5 + nome

num1Alt = num1.toString() // Transforma o tipo "number" para "string"

console.log('=================================================================================================================')
console.log(`A Concatenação de ${num1} + ${num2} = ${num1Alt + num2}`) // Exibe o Resultado da Concatenação
console.log(`O Número ${num2} Reduzido a Duas Casas Decimais Fica Igual a ${num2.toFixed(2)}`) // Exibe apenas às duas casas decimais de "0.752312312"
console.log(`O Número ${num1} é Inteiro? ${Number.isInteger(num1)}`) // Verifica se o valor é um inteiro e retorna true ou false
console.log(`O Valor de "${resultado}" é Válido? ${Number.isNaN(resultado)}`) // Verifica se o valor é do tipo Number e retorna true ou false
console.log('=================================================================================================================')