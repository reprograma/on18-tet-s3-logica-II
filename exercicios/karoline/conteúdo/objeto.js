//const nome = "Darlene"
//const idade = 18
//const signo = "Aquário"

//console.log(signo)

//key: value

//const aluna - {
//    nome: {primeiro: "Darlene",
//           segundo: "Santos"}
//    idade: 18,
//    signo: 'Capricórnio',
//    saudacao: ()=> console.log(`Oi, eu sou Darlene`)
//}
//console.log(aluna.nome.segundo)
//console.log(aluna.signo)
//console.log(aluna.idade)
//aluna.saudacao()

//const professora = new Object()
//console.log(professora)
//professora.signo = "Aquário"
//console.log(professora)

// console = objeto e log = metodo pra imprimir no console
// Desestruturando objetos
//let {nome, idade} = aluna
//console.log(idade)

// OBJETO DATE  
//const hoje = new Date();
//console.log(hoje)

//const dia = hoje.getDay();
//console.log(dia)

//const mes = hoje.getMonth();
//console.log(mes)

//const ano = hoje.getFullYear();
//console.log(ano)
//outra forma
//console.log(`${dia}/${mes + 1}/${ano}`)

//outra forma
//const dataFormatada = hoje.toLocaleDateString("pt-br",{weekday: "long"
//year: 'numeric',}
//)
//console.log(dataFormatada)
//outra forma
//const configurações = {
    weekday: 'long'
    year: 'numeric'
    month: 'numeric'
    day: 'numeric'
    hour: 'numeric'
    minute: 'numeric'
    second: 'numeric'
//}
//const dataFormatada = hoje.toLocaleDateString("pt-br",{configurações}
//)
//console.log(dataFormatada)

}
for (let produto of clienteLilit.carrinho) {
  valorDesconto = produto.valor - desconto
 }
for (let produto of clienteLilit.carrinho) {
  valorFinal = valorFinal + produto.valor
 }
  console.log(clienteLilit.produto)