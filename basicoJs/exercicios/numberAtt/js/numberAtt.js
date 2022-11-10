/* 
    Neste desafio foi proposto que o usuário digitasse um número de sua preferencia, e a partir do valor digitado
    iriamos exibir informações sobre o valor, tais como (raiz quadrada, se o número é inteiro, arredondamento etc..).

    Inicialmente criei uma constante que receberia o valor digitado pelo o usuário, como todo "prompt" converte o valor em "string"
    utilizei o atributo "Number" para reverte-lo em tipo "number".

    Após coletar o valor digitado pelo usuário, utilizei uma nova forma de exibir o JavaScript no HTML, 
    usando o básico de DOM, que consiste em declarar uma variável com o "id" declarado no HTML.

    Seguindo o desafio realizei a exibição dos resultados na página HTML, usando o JavaScript para realizar os cálculos.

    Usei a biblioteca Math e atributos de number, como ".toFixed" que limita às casas decimais.

    <==Dica==>

    Para atribuir um valor ao invés de alterar o existente usamos o "+="
*/

const numero = Number(prompt('Digite Um Número:')) // Variável que coleta o valor do usuário
const numeroTitulo = document.getElementById("numeroTitulo") // Busca o id do HTML e o coloca em uma variável
const resultado = document.getElementById("resultado") // Busca o id do HTML e o coloca em uma variável

numeroTitulo.innerHTML = numero // Exibe o número digitado pelo usuário
resultado.innerHTML += `<p>A Raiz Quadrada de ${numero} é Igual a: <strong>${(numero ** (0.5))}</strong></p>` // Exibe a raiz quadrada
resultado.innerHTML += `<p>${numero} é Inteiro? <strong>${Number.isInteger(numero)}</strong></p>` // Exibe se o número é inteiro
resultado.innerHTML += `<p>${numero} é NaN? <strong>${Number.isNaN(numero)}</strong></p>` // Exibe se o número é NaN
resultado.innerHTML += `<p>${numero} Arredondado Para Baixo? <strong>${Math.floor(numero)}</strong></p>` // Exibe o arredondamento do valor para baixo
resultado.innerHTML += `<p>${numero} Arredondado Para Cima? <strong>${Math.ceil(numero)}</strong></p>` // Exibe o arredondamento do valor para cima
resultado.innerHTML += `<p>${numero} Com Duas Casas Decimais? <strong>${numero.toFixed(2)}</strong></p>` // Exibe o valor com duas casas decimais