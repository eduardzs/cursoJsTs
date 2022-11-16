/* 
    <==Operadores Lógicos==>

    • && -> and -> e (True e True)
    • || -> or -> ou (True ou False)
    • ! -> not -> não (True Vira False ou False Vira True)
*/

console.log(10 === 10 && 11 === 11) // Ambas devem retornar true, para que a saída seja true
console.log(10 === 10 || 10 === 11) // Pelo menos uma deve retornar true, para que a saída seja true
console.log(!10 === 10) // Inverte o resultado

const usuario = 'Eduardo' // Declara a variável e seu valor
const senha = '12345678' // Declara a variável e seu valor

// Valida às comparações para que ambas retorne true, e armazena o resultado na variável
const validarLogin = usuario === 'Eduardo' && senha === '12345678' 

console.log(`Seu Login e Senha São ${validarLogin}! Seja Bem-vindo ${usuario}!`) // Exibe o resultado no console
