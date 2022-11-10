/* 
    Neste primeiro exercício utilizando variáveis (const e let), nosso
    desafio é criar um código que leia os dados passados e calcule o IMC e 
    o ano de nascimento.

    Usamos também nesse desafio o operador aritmético "+" para concatenar.

    <==Dica==>

    Usamos também neste código o (Template Strings) que constitui em usar
    às crases para exibir string's e às (${}) para exibir às variáveis declaradas. 
    (Maneira mais modernam, simples e legível)
*/

const nome = 'Eduardo' //String
const sobrenome = 'Fonseca' //String
const idade = 19 //Number
const altura = 1.65 //Number
const peso = 70 //Number
let imc = (peso / (altura*2)) //Number
let anoNascimento = (2022 - idade); //Number

console.log('<============Informações===========>')

console.log(`Olá, me chamo ${nome} ${sobrenome}.`) // Exibe na tela o nome e sobrenome
console.log(`Tenho ${idade} anos.`) // Exibe na tela a idade
console.log(`Peso: ${peso} KG.`)    // Exibe na tela o peso
console.log(`Altura: ${altura} M.`) // Exibe na tela a altura
console.log(`IMC: ${imc}.`) // Exibe na tela o IMC
console.log(`Nasci em: ${anoNascimento}.`) // Exibe na tela o ano de nascimento

console.log('<==================================>')
