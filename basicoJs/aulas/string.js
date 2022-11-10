/* 
    Podemos deixar "escapar" caracteres de um string, apenas colocando a barra invertida "\\" em seu texto.

    Cada caractere de uma string têm um índice, começando de "0". Outra maneira de localizar o índice de uma string
    é utilizando o comando charAt() junto a variável.

    Podemos concatenar uma string de uma outra forma, usando o comando concat() junto a variável.

    Para efetuar a pesquisa do índice de uma palavra ou letra podemos utilizar o comando indexOf() junto a variável. Para inverter
    a procura deste índice podemos usar o comando lastIndexOf().

    Vimos sobre Expressões Regulares. *Pesquisar Mais Sobre*

    Para saber o tamanho de uma string usamos o atributo "length" junto a variável.

    Podemos fatiar um string usando o comando slice() junto a variável.

    Dividimos um string usando o comando split() junto a variável

    Usando o comando toUpperCase() deixamos toda a string em maiúsculo e usando a função toLowerCase() deixamos toda
    a string minuscula.

*/

console.log('======================================================')

let texto = "Olá, \"Mundo\"" // String

//          01234 - Índice da string
console.log(`Frase: ${texto}`) // Exibe a palavra completa
console.log(`Índice 0 da Frase: ${texto[0]}`) // Exibe o conteúdo do índice "0"
console.log(`Índice 6 da Frase: ${texto.charAt(6)}`) // Exibe o conteúdo do índice "6"
console.log(`Concatena os Índices: ${texto[0].concat(texto.charAt(6))}`) // Exibe a concatenação dos indices
console.log(`Qual Primeiro Índice da Palavra Mundo: ${texto.indexOf('Mundo')}`) // Pequisa em qual índice começa a palavra - ordem crescente
console.log(`Qual Índice da Palavra Olá (Invertido): ${texto.lastIndexOf('Olá')}`) // Pequisa em qual índice começa a palavra - ordem decrescente
console.log(`Expressão Regular Match: ${texto.match(/[á]/)}`) // Expressão Regular - trás informações sobre o índice
console.log(`Expressão Regular Search: ${texto.search(/[á]/)}`) // Expressão Regular - busca o índice
console.log(`Expressão Regular Replace: ${texto.replace('Olá', 'Hello')}`) // Expressão Regular - altera a string
console.log(`Tamanho da String: ${texto.length}`) // Tamanho da string
console.log(`Fatia a String: ${texto.slice(0, 3)}`) // Fatia a string
console.log(`Dividi a String ${texto.split(' ')}`) // Dividi a string
console.log(`Deixa a String em Maiúsculo ${texto.toUpperCase()}`) // Deixa maiúsculo
console.log(`Deixa a String em Minusculo ${texto.toLowerCase()}`) // Deixa minusculo

console.log('======================================================')