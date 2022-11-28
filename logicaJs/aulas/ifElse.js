/* 
    <==If, Else If, Else=>

    • if -> Se
    • else -> Se Não
    • else if -> Se Não, Se

    <==Estrutura==>

    if(condição){
        passos a serem executados
    }
*/

const hora = 24 // Declara a variável e seu valor

console.log('=-=-=-=-=-=-=-=-=-=-=')

if(hora >= 0 && hora <= 12){ // Se a variável for verdadeira executa os comandos dentro
    console.log('> Bom Dia!') // Imprimi no console
}
else if(hora > 12 && hora <= 18){ // Se a variável for verdadeira executa os comandos dentro
    console.log('> Boa Tarde!') // Imprimi no console
}
else if(hora > 18 && hora <= 24){ // Se a variável for verdadeira executa os comandos dentro
    console.log('> Boa Noite!') // Imprimi no console
}
 else
    console.log('HORÁRIO INVALIDO')

console.log('=-=-=-=-=-=-=-=-=-=-=')
