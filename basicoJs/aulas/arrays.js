/* 
    Nesta aula vimos sobre "Array", de uma forma bem resumida e básica um array trata-se de uma coleção com elementos dentro ou vazio.

    Para definir um array usamos os "[]", onde irá conter todos os nossos elementos.

    Uma boa prática para criamos um array séria cada array ter apenas um tipo primitivo.

    Cada elemento de um Array têm um index, começando no "0".

    Vimos também nesta aula 3 maneiras de adicionar um novo elemento ao final do array, são eles:

    • Pelo índice
    • Pelo tamanho (Length)
    • Pelo atributo (Push)

    Para adicionar um elemento ao inicio do array usamos o atributo "unshift()".

    Para remover um elemento do final do array usamos o atributo "pop()".

    Para remover um elemento do inicio do array usamos o atributo "shift()".

    Para remover um elemento sem que os índices sejam alterados fazemos a seguinte forma "delete variável[índice]".

    Para fatiar um array usamos o mesmo atributo para fatiar uma string, o atributo "slice()", lembrando que o último índice não é incluído.
*/

//                  0         1       2        3        Índice dos elementos do array
const alunos = ['Eduardo', 'Maria', 'João', 'Paulo'] // Variável recebendo o array

console.log('===============================================================================================================')
console.log(`Inicialmente Nosso Array Contém Os Seguintes Elementos: [${alunos}]`) // Exibe o array padrão, sem alterações
console.log(`Aqui Consultamos o Índice "2" do Array: [${alunos[2]}]`) // Exibe o elemento que está no índice "2" do array
alunos[0] = 'Vitoria' // Alteramos o valor do elemento do index "0"
console.log(`Aqui Alteramos o Valor de Um Dos Elementos do Array: [${alunos}]`) // Exibe o resultado da alteração
alunos[4] = 'José' // Adiciona o elemento ao final do array
console.log(`Maneira de Adição (Índice) | Resultado no Final: [${alunos}]`) // Exibe o resultado da maneira de adição de elementos ao array (índice)
console.log(`Aqui Consultamos o Tamanho do Nosso Array: [${alunos.length}] Índices`) // Exibe o tamanho do array em índice
alunos[alunos.length] = 'Kaue' // Adiciona o elemento ao final do array
alunos[alunos.length] = 'Jarbas' // Adiciona o elemento ao final do array
console.log(`Maneira de Adição (Length) | Resultado no Final: [${alunos}]`) // Exibe o resultado da maneira de adição de elementos ao array (length)
alunos.push('Otavio') // Adiciona o elemento ao final do array
console.log(`Maneira de Adição (Push) | Resultado no Final: [${alunos}]`) // Exibe o resultado da maneira de adição de elementos ao array (push)
alunos.unshift('Katia') // Adiciona o elemento ao inicio do array
console.log(`Maneira de Adição (UnShift) | Resultado no Inicio: [${alunos}]`)
const removidoFinal = alunos.pop() // Remove o elemento do último índice
console.log(`Removemos Um Elemento do Final do Nosso Array: [${alunos}]`) // Exibe o array com o elemento removido do final
console.log(`O Elemento Removido do Final Foi: [${removidoFinal}]`) // Exibe o elemento que foi removido do final
const removidoInicio = alunos.shift() // Remove o elemento do primeiro índice
console.log(`Removemos Um Elemento do Final do Nosso Array: [${alunos}]`) // Exibe o array com o elemento removido do inicio
console.log(`O Elemento Removido do Inicio Foi: [${removidoInicio}]`) // Exibe o elemento que foi removido do inicio
delete alunos[1] // Remove o elemento do índice sem alterar os índices
console.log(`Deletamos Um Elemento do Array Sem Alterar Os Índices: [${alunos}]`) // Exibe o resultado do array com elemento removido e índice mantido
console.log(`Array Fatiado do Índice "0" ao "3": [${alunos.slice(0, 4)}]`) // Separa os elementos do índice "0" ao "3"
console.log('================================================================================================================')