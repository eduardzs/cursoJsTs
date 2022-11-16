/* 
    <==Avaliados em False==>

    • false
    • 0
    • '' ou ""
    • null | undefined
    • NaN
*/

const num1 = 2 // Declara a variável e seu valor
const num2 = 3 // Declara a variável e seu valor

// Ambos precisam ser True para o resultado ser verdadeiro
console.log(`${num1} é Igual a 2 e ${num2} é Igual a 3? ${num1 === 2 && num2 === 3}`) // Imprimi no console


// Apenas um precisa ser True para que o resultado seja verdadeiro
console.log(`${num1} é Igual a 2 ou ${num2} é Igual a 5? ${num1 === 2 || num2 === 5}`) // Imprimi no console
