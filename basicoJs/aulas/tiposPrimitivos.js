/* 
    Para saber o tipo de uma variável usamos o comando "console.log(typeof())".
    
    Se uma variável (let), não estiver com um valor declarado, por padrão o motor
    do JavaScript a declara como tipo primitivo "undefined". (Indefinido)

    "Null e Undefined" são diferentes, a diferença é que "Null" é declarado por quem o programa, 
    e o "Undefined" a própria linguagem (motor) a declara.

    <== Tipos Primitivos ==>

    • "String" = Texto

    • "Number" = Numero
    
    • "Boolean" = Boleando (True or False)

    • "Undefined" = Indefinido (Sem valor, não aponta para nenhum local da memória)

    • "Null" = Nulo (Sem valor, não aponta para nenhum local da memória)
*/

const nome = 'Eduardo' // String
const idade = 18 // Number
let anoNascimento // Undefined
let peso = null // Null
let maiorIdade = true // Boolean

console.log('<================Tipos Primitivos================>')

console.log(`A variável nome é do tipo: ${typeof(nome)}`) // Exibe o seu tipo primitivo
console.log(`A variável idade é do tipo: ${typeof(idade)}`) // Exibe o seu tipo primitivo
console.log(`A variável anoNascimento é do tipo: ${typeof(anoNascimento)}`) // Exibe o seu tipo primitivo
console.log(`A variável peso é do tipo: ${typeof(peso)}`) // Exibe o seu tipo primitivo
console.log(`A variável maiorIdade é do tipo: ${typeof(maiorIdade)}`) // Exibe o seu tipo primitivo

console.log('<================================================>')