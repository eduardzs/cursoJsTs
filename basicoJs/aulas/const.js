/* 
    Em JavaScript existe uma variável que é constante, ou seja, que não altera o seu valor.

    Para declarar está variável fazemos da seguinte maneira:

    • const (Constante)

    Ao contrario de uma variável como (let e var), uma constante não pode ter
    o seu valor declarado posteriormente, então temos que declarar o seu valor,
    junto a sua criação.

    <== Alguns Operadores Aritméticos ==>

    • "+" = Adição

    • "-" = Subtração
    
    • "*" = Multiplicação

    • "/" = Divisão

    <==Dica=>

    Para saber o tipo de uma variável usamos dentro do console.log() um comando chamado
    typeof().
*/

let nome = 'Eduardo' // String
const numeroUm = 9 // Number
const numeroDois = 2 // Number

console.log('===================================')

console.log('Meu nome é', nome, 'e tenho', numeroUm * numeroDois, 'Anos!')

console.log('===================================')

console.log('<=======Tipos das variáveis=======>')
console.log('Variável numeroUm, tipo:', typeof(numeroUm))
console.log('Variável numeroDois, tipo:', typeof(numeroDois))
console.log('Variável nome, tipo:', typeof(nome))
console.log('<=================================>')