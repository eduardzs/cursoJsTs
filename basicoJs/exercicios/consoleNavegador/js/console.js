/* 
    Trata-se de um exercício onde usamos o comando "prompt" para pedir o usuário que informe
    dois valores. Após o usuário informar, pegamos esses valores e retornamos um "alert" com 
    o resultado.
*/

alert('Bem Vindo a Calculadora Que Apenas Soma!') // Alerta
confirm('Tem Certeza Que Deseja Continuar?') // Pergunta
alert('Tudo Bem, Vamos Lá! :)') // Alerta
let num1 = prompt('Informe o Primeiro Número:') // Coloca o valor em uma variável
let num2 = prompt('Informe o Segundo Número:') // Coloca o valor em uma variável
let resultado = Number(num1) + Number(num2) // Transforma ás string's em tipo number e faz a soma dos valores
alert(`O Resultado da Sua Soma é ${resultado}`) // Exibe o valor da soma


