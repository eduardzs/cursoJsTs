/* 
    Neste exercício foi proposto que criássemos um formulário que receberia dados e os colocaria dentro de um "Array" de "Objetos".

    Aprendemos nesse exercício sobre eventos, como o submit de um botão que toda vez que recebe um click recarrega a página.
*/

function meuEscopo() {
    const formulario = document.querySelector('.form') // Busca tudo que está na class
    const resultado = document.querySelector('.resultado') // Busca a class resultado no HTML
    const pessoas = [] // "Array" onde ficará os "Objetos"

    function recebeEventoForm(evento) { // Função que anula o reload da página
        evento.preventDefault() // Previne que a página recarregue e perca os dados
        const nome = document.querySelector(".nome") // Busca o valor inserido no HTML
        const sobrenome = document.querySelector(".sobrenome") // Busca o valor inserido no HTML
        const peso = document.querySelector(".peso") // Busca o valor inserido no HTML
        const altura = document.querySelector(".altura") // Busca o valor inserido no HTML
        pessoas.push({ // Envia para dentro do "Array" o "Objeto" com os dados preenchidos
            Nome: nome.value,
            Sobrenome: sobrenome.value,
            Peso: peso.value,
            Altura: altura.value
        })
        console.log(pessoas) // Exibe no console
        resultado.innerHTML += `<p>Nome:${nome.value}<br> Sobrenome:${sobrenome.value}<br> Peso:${peso.value}<br> Idade:${altura.value}</p>` // Exibe no HTML
    }
    formulario.addEventListener('submit', recebeEventoForm) // Adiciona o evento a const
}
meuEscopo() // Chama a função

// Modelo Mais Antigo
/* formulario.onsubmit = function (evento) { // Função que anula o reload da página
    evento.preventDefault() // Previne que a página recarregue e perca os dados */