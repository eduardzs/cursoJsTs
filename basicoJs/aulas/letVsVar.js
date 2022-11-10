/* 
    Vamos ver agora às principais diferenças entre (let e var).

    <==Diferenças==>

    • Com let você não consegue redeclarar uma variável, já com var é
    possível está redeclaração. (Essa redeclaração não é recomendada)

    <==Dica==>

    • Não crie variáveis sem declarações (const, var, let), é possível, mas não é recomendado.
*/

console.log('<============>')

console.log('Before')
var nome = 'Maycon' // String
console.log(nome) // Valor declarado

console.log('<============>')

console.log('After')
var nome = 'Eduardo' // String
console.log(nome) // Valor redeclarado

console.log('<============>')