/* 
    Nesta aula vimos sobre "Objetos", um objeto nos ajuda a não termos várias variáveis para conter valores de um só grupo.

    Um exemplo é o cadastro de usuários em um site, podemos criar um objeto para cada usuário onde irá conter todas ás suas informações.

    Diferente de um array, para definir que algo é objeto usamos às "{}" e logo em seguida declaramos o nome das variáveis e seu valor.

    <==Estrutura==>

    const cadastro = {
        nome: "nome",
        sobrenome: "sobrenome",
        idade: idade
    }
    
    Obs: Separamos às variáveis com ",". 
    
    Podemos também fazer a estrutura da seguinte forma:

    <==Estrutura==>

    const cadastro = {nome,sobrenome,idade}

    Onde o próprio JavaScript define o nome da variável, sem a necessidade de repetição, pois são palavras iguais.

    Podemos criar uma "Função" dentro de um "Objeto" e utilizar o seus valores com o atributo ".this".
*/

// Função Anônima De Um Objeto
const cadastroPessoas = (nome, sobrenome, idade) => {
    return {
        nome: `Primeiro Nome: ${nome}`, // Variável recebendo parâmetro
        sobrenome: `Último Nome: ${sobrenome}`, // Variável recebendo parâmetro
        idade: `${idade} Anos` // Variável recebendo parâmetro
    }
}

const pessoa1 = cadastroPessoas('Eduardo', 'Fonseca', 19) // Valor do parâmetro
const pessoa2 = cadastroPessoas('Maria', 'Isabel', 22) // Valor do parâmetro
const pessoa3 = cadastroPessoas('João', 'Carlos', 35) // Valor do parâmetro
console.log(pessoa1, pessoa2, pessoa3) // Exibe no console o resultado

// Objeto Com Função Dentro
const raizQuadrada = {
    numero: 15, // Variável com valor

    // Função
    calcularRaiz(){
        console.log(`A Raiz Quadrada de ${this.numero} é ${(this.numero **(0.5)).toFixed(2)}`) // Exibe o resultado
    }
}

raizQuadrada.calcularRaiz() // Chama a função