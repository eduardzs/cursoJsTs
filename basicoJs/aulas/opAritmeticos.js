/* 
    <== Operadores Aritméticos ==>
        
    • "+" = Adição / Concatenação

    • "-" = Subtração
    
    • "*" = Multiplicação

    • "/" = Divisão

    • "**" = Potência

    • "%" = Resto da Divisão

    • "++" = Incremento - Se usado após uma variável ele faz o pós incremento, se
    usado antes ele faz o pré incremento.

     • "--" = Decremento - Se usado após uma variável ele faz o pós decremento, se
    usado antes ele faz o pré decremento.

    <== Ordem de Precedência ==>

    • "()" = Primeiro

    • "**" = Segundo

    • "*, /, %" = Terceiro

    • "+, -" = Quarto

    <== Dica ==>

    Podemos simplificar uma linha de comando da seguinte maneira:

    Ao invés de escrever "contador = contador + 2", simplifique para "contador += 2" - Isso funciona para qualquer
    operador aritmético.

    NaN = Algum dado passado não funcionou corretamente. - Para corrigir este erro podemos envolver o valor da nossa variável
    em um "parseInt('String')", onde a transforma em um "número inteiro" e muda seu tipo primitivo para number. Caso seja uma conta com
    ponto flutuante podemos usar o comando "parseFloat('String')". Existe também uma maneira geral que seria usando o comando "Number('String')",
    onde ele identifica qual o tipo numérico.  
*/

const num1 = 5 // Number
const num2 = 10 // Number
const num3 = "12" // String

console.log('<== SOMA ==>')
console.log(`${num1} + ${num2} = ${num1 + num2}`) // Soma, pois são duas variáveis do tipo number

console.log('<== CONCATENAÇÃO ==>')
console.log(`${num3} + ${num1} = ${num3 + num1}`) // Concatena, pois uma das variáveis é do tipo string

console.log('<== DIVISÃO ==>')
console.log(`${num2} / ${num1} = ${num2 / num1}`) // Dividi

console.log('<== MULTIPLICAÇÃO ==>')
console.log(`${num1} * ${num2} = ${num1 * num2}`) // Multiplica

console.log('<== POTÊNCIA ==>')
console.log(`${num2} ** ${num1} = ${num2 ** num1}`) // Elevado a Potência

console.log('<== RESTO DA DIVISÃO ==>')
console.log(`${num2} % ${num1} = ${num2 % num1}`) // Resto da Divisão

console.log('<== INCREMENTO PÓS ==>') // Pós Incremento
let contadorUm = 0; // Number, o contado iniciará em 0
contadorUm++ // Valor +1
contadorUm++ // Valor +2
contadorUm++ // Valor +3
contadorUm++ // Valor +4
contadorUm++ // Valor +5

console.log(contadorUm) // Valor deve ser 5

console.log('<== DECREMENTO PRÉ ==>') // Pré Incremento
let contadorDois = 10; // Number, o contado iniciará em 10
--contadorDois // Valor -9
--contadorDois // Valor -8
--contadorDois // Valor -7
--contadorDois // Valor -6
--contadorDois // Valor -5

console.log(contadorDois) // Valor deve ser 5