//Clientes

let listaDeClientes = [];

listaDeClientes.clienteLilit = [
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
  {produto: 'meia calça transparente', valor: 80.0}]

listaDeClientes.clienteJulia = [
  {produto: 'Blusa preta gola alta', valor: 60.0}, 
  {produto: 'Bolsa pequena', valor: 49.0}]

listaDeClientes.clienteWanda = [
  {produto: 'Blusa simples', valor: 35.0}, 
]

//Abrir função

function Carrinho(listaDeItens){
  let valorTotal = 0;
  //Somar todos os itens
  for (itemIndividual of listaDeItens){
    valorTotal = valorTotal + itemIndividual.valor;
  }

  //Aplicar descontos de carrinho
  let valorComDesconto = valorTotal
  if (100>valorComDesconto && valorComDesconto >=60){
    valorComDesconto = (valorTotal - valorTotal/10)
  }else if(200>valorComDesconto && valorComDesconto >=100){
    valorComDesconto = (valorTotal - valorTotal/5)
  }else if(valorComDesconto >=200){
    valorComDesconto = (valorTotal/2)
  }

  //Aplicar desconto PIX
  let descontoPIX = valorComDesconto - (valorComDesconto/20)

  //Cupom de desconto na próxima compra
  let cupomDesconto = 0
  if (listaDeItens.length >= 10){
    cupomDesconto++
  }

  console.log(listaDeItens)
  console.log(" ")
  console.log(">>>>Valor total das compras: R$" + valorTotal)
  console.log(">>>>Valor com desconto de carrinho: R$" + valorComDesconto)
  console.log(">>>>Valor para pagamentos via PIX: R$" + descontoPIX)
  console.log(">>>>Você possui um total de "+cupomDesconto+" cupons para próxima compra!")
  console.log(" ")
}

Carrinho(listaDeClientes.clienteLilit)
Carrinho(listaDeClientes.clienteJulia)
Carrinho(listaDeClientes.clienteWanda)