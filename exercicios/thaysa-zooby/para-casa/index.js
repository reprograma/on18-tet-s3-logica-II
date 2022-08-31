let clienteLilit = {
  pagamento: 'pix',
  carrinho: [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 62.0}, 
    {produto: 'Jaqueta Jeans', valor: 350.0}, 
    {produto: 'Calça preta', valor: 290.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 80.0}
  ]
}


let clienteBeyonce = {
  pagamento: 'a vista',
  carrinho: [
    {produto: 'Blusa simples', valor: 35.0},
    {produto: 'Blusa preta gola alta', valor: 60.0},
    {produto: 'Calça jeans clara', valor: 130.0},
    {produto: 'Tênis casual preto', valor: 120.0},
    {produto: 'Salto agulha 39', valor: 250.0}
  ]
}

let clienteRihanna = {
  pagamento: 'cartao',
  carrinho:  [
    {produto: 'Calça preta', valor: 290.0},
    {produto: 'Short verde canelado', valor: 80.0},
    {produto: 'meia calça transparente', valor: 80.0},
    {produto: 'Blusa preta gola alta', valor: 60.0},
    {produto: 'Jaqueta Jeans', valor: 350.0},
  ]
}


//COLOCANDO DESCONTO NAS PECAS DE ACORDO COM AS REGRAS
let carrinhoComDescontos = new Object()
function descontosNoCarrinho(lista) {
  

  for(let item of lista){
    if (item.valor >= 60.0 && item.valor < 100.0){
      carrinhoComDescontos[item.valor] = (item.valor - (item.valor * 0.1))
    } else if (item.valor >= 100.0 && item.valor < 200.0){
      carrinhoComDescontos[item.valor] = (item.valor - (item.valor * 0.2))
    } else if (item.valor>= 200.0){
      carrinhoComDescontos[item.valor] = (item.valor - (item.valor * 0.5))
    } else {
      carrinhoComDescontos[item.valor] = item.valor
    }
  }
  return console.table(carrinhoComDescontos)
}

//PASSANDO O CARRINHO DE UMA CLIENTE NA FUNCAO
descontosNoCarrinho(clienteLilit.carrinho)

//TRANSFORMANDO OBJETO PARA ARRAY
let carrinhoComDescontosLista = Object.values(carrinhoComDescontos)
console.log(carrinhoComDescontosLista)

//SOMANDO OS VALORES JA COM DESCONTO DAS PECAS QUE ESTAO NO CARRINHO DA CLIENTE
let somaComDescontos = 0

function somandoCarrinhoComDescontos(lista) {  
  for(let i = 0; i < lista.length; i++) {
    somaComDescontos += lista[i];
  }
  return console.log(somaComDescontos);
}

somandoCarrinhoComDescontos(carrinhoComDescontosLista)

// //CADASTRANDO PAGAMENTO
let descontoTotalDePagamento = 0

// function pagando(){
  
  if(clienteLilit.pagamento == 'pix' || clienteLilit.pagamento == 'avista'){
    descontoTotalDePagamento = somaComDescontos - somaComDescontos * 0.05
    return console.log(descontoTotalDePagamento)
  }   
// }

// pagando(clienteLilit.pagamento)

// //DETERMINANDO CUPOM OU NAO
// function cupom(){
  if (descontoTotalDePagamento >= 800.0 || clienteLilit.carrinho.length >= 9){
    return console.log("Parabens, voce ganhou um cupom de 50 reais para a proxima compra!")
  }
// }

// DATA E HORA
const hoje = new Date()
const dataFormatada = hoje.toLocaleDateString("pt-BR")

console.log(dataFormatada)
