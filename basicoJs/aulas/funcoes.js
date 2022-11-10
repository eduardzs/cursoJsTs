/* 
    Nesta aula vimos sobre "Funções", podemos reutilizar uma função em várias partes do nosso código.

    Uma maneira para declarar uma função é da seguinte forma:

    Chamamos o comando "function", declaramos um nome a está função, após declarar um nome abrimos os "()" onde
    podemos ejetar parâmetros dentro ou não, abrimos às "{}" onde iremos escrever linhas de comando e por fim chamamos 
    a nossa função fora das chaves.

    Obs: Passamos os valores dos parâmetros fora da função, quando a chamamos.

    <==Estrutura==>

    function nomeFuncao("parâmetros"){
        "linhas de comando"
    }

    nomeFuncao("onde declara o valor dos parâmetros")

    Por padrão toda função retorna o valor primitivo undefined, até que seja especificado.

    Para especificar o que deve ser retornado podemos fazer da seguinte forma:

    <==Estrutura==>

    function nomeFuncao("parâmetros"){
        "linhas de comando"
        return 12345 ==> "agora nossa função irá retornar esses valores"
    }

    nomeFuncao("onde declara o valor dos parâmetros")

    Onde no "return" vai conter os valores a serem retornados

    return = Final da função, nada mais será executado
*/

// Criamos a função com o parâmetro "nome", onde definimos o seu valor fora da função
function saudacao(nome){
    console.log(`Bom Dia ${nome}!`) // Exibe a frase no console com o valor injetado no parâmetro
    return 12345
}

saudacao('Eduardo') // Valor do parâmetro

let valorVariavel = saudacao('Maria') // Colocamos o valor da função em uma variável
console.log(`Valor do Return: ${valorVariavel}`) // Exibimos o valor que essa função retorna, no caso o que foi especificado no "return"

// Podemos reutilizar uma função em várias partes do nosso código, como essa função que soma dois valores
function somaValores(x, y){
    console.log(`A Soma de ${x}+${y}=${x + y}`) // Exibe a frase no console e faz a soma dos valores
}

somaValores(2, 5) // Valor dos parâmetros x,y
somaValores(2, 2) // Valor dos parâmetros x,y
somaValores(2, 10) // Valor dos parâmetros x,y

/* 
    Existem outras duas maneiras de criar "Funções".

    De maneira anonima, onde chamamos de "Função Anonima", onde declaramos uma variável com o valor de uma função.

    <==Estrutura==>

    const nomeVariavel = function("parâmetros"){
        "linhas de comando"
    }

    nomeVariavel("onde declara o valor dos parâmetros")

    Outra maneira é usando a arrow, onde chamamos de "Arrow Function", declaramos uma variável com o valor de uma função,
    mas ao invés de usar a palavra "function" usamos o simbolo de "=>".

    const nomeVariavel = () => {
        "linhas de comando"
    }

    nomeVariavel("onde declara o valor dos parâmetros")

    Podemos fazer a Arrow Function também da seguinte forma:

    const nomeVariavel = "parâmetro" => (parâmetro * 2)

    nomeVariavel("onde declara o valor dos parâmetros")
*/

// Função Anonima
const raizQuadrada = function (n){
    console.log(`A Raiz Quadrada de ${n} é ${(n **(0.5))}`)
    return
}

raizQuadrada(7) // Valor do parâmetro
raizQuadrada(2) // Valor do parâmetro
raizQuadrada(15) // Valor do parâmetro

// Arrow Function
const subtracao = (x, y) => {
    console.log(`A Subtração de ${x}-${y}=${x - y}`)
    return
}

subtracao(5,5) // Valor dos parâmetros x,y
subtracao(5,9) // Valor dos parâmetros x,y
subtracao(10,5) // Valor dos parâmetros x,y