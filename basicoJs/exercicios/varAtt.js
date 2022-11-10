/* 
    Neste desafio foi proposto que houve-se 3 variáveis com valores aleatórios, mas que
    quando fossem exibidos na tela os valores fossem trocados de suas variáveis.

    <==Exemplo==>

    varA = 'A'
    varB = 'B'
    varC = 'C'

    Onde varA teria o valor de B, varB o valor de C e varC o valor de A.
*/

let varA = 'A' // String - terá o valor de B
let varB = 'B' // String - terá o valor de C
let varC = 'C' // String - terá o valor de A

let varTemp = varA // Recebe o valor de "varA" sem perde-lo
varA = varB // Recebe o valor de "varB"
varB = varC // Recebe o valor de "varC"
varC = varTemp // Recebe o valor de "varTemp" quando o "varA" ainda valia 'A'

let resultado = varA + varB + varC // Uma variável que recebe o resultado

console.log(`${resultado}`) // Exibe o resultado