/* 
    Uma variável é como se fosse um objeto, e sua memória e como se fosse uma estante, 
    então quando declaramos uma variável, seria como estivéssemos alocando em um lugar da
    sua memória um objeto, para podermos usar adiante.

    Uma variável como o próprio nome diz, pode variar e ter o seu valor alterado.

    Vamos ver dois tipos de variáveis:

    • var (Mais antigo)
    • let

    Podemos concluir então que uma variável serve para guarda algum valor.

    Podemos declarar uma variável sem um valor, e declarar seu valor posteriormente.

    <==Algumas "Regras" Para Declaração de Variáveis==>

    • Não podemos utilizar palavras reservadas.
    Ex: (console, let, var, if, else...)

    • Variáveis precisam ter nomes significativos.
    Ex: (n, p, q, DFHU, Jsadf)

    • Variáveis não podem começar com um número.
    Ex: (1nome, 32Linha, 18anos)

    • Variáveis não podem conter espaços em brancos, nem traços.
    Ex: (nome Cliente, nome-Usuario)

    • Letras maiúsculas e minusculas fazem diferença (Case-sensitive).
    Ex: (nomecliente, nomeCliente) --> Para o JS ambas são diferentes.

    • Não podemos redeclarar variáveis com let ou var.

    • Não utilize (var), utilize (let).

    <==Dica==>

    Uma maneira elegante e moderna para declarar variáveis é usando o (camelCase), 
    iniciando a primeira palavra com letra minuscula e suas próximas palavras 
    compostas com letra maiúscula.
*/

let nome = 'Eduardo' // String
let areaAtuacao = 'Desenvolvimento Web' // String

let idade // Declaração de variável sem valor
idade = 18 // Declarando o valor da variável (idade) posteriormente

console.log('==========================================================================')

console.log(nome, 'nasceu em 2003.') // Uso da variável
console.log('Em 2019,', nome, 'conheceu a Programação.') // Uso da variável
console.log(nome, 'se apaixonou pela programação.') // Uso da variável
console.log('Então', nome, 'começou seus estudos na área de', areaAtuacao) // Uso das variáveis

console.log('==========================================================================')

console.log('Before')
console.log(nome) // Antes de alterar seu valor

console.log('==========================================================================')

nome = 'Maycon' // Alteração do valor da variável

console.log('After')
console.log(nome) // Depois da alteração do seu valor

console.log('==========================================================================')