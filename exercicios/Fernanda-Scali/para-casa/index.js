
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
let valorTotal = 0
for (let cadaProduto of clienteLilit.carrinho){
  valorTotal = valorTotal + cadaProduto.valor
}
console.log (valorTotal)

let clienteFernanda = {
  compras: [
  {produto: 'Calça jeans clara', valor: 130.0}, 
  {produto: 'Blusa preta gola alta', valor: 60.0}, 
  {produto: 'Short verde canelado', valor: 80.0},
  {produto: 'Bolsa pequena', valor: 50.0}
]
}
let clienteAline = {
  compras:[
  {produto: 'Blusa simples', valor: 35.0},
  {produto: 'Bolsa pequena', valor: 49.0},
]
}

function calcular(lista, formaDePagamento){
  let pecas = lista.length

  let retorno = {
        valorTotal: 0,
        valorFinal: 0,
        desconto: 0
  }

  let valorComDesconto = 0

  for (produto of lista){
  retorno.valorTotal += produto.valor  

      if (produto.valor >= 60.0 && produto.valor < 100.0){
           valorComDesconto[produto.item] = produto.valor - (produto.valor * 0.1) 

      }
      else if (produto.valor >= 100.0 && produto.valor < 200.0){
                valorComDesconto[produto.item] = produto.valor - (produto.valor * 0.2)   

      }
      else if (produto.valor >= 200.0 ){
                valorComDesconto[produto.item] = produto.valor - (produto.valor * 0.5) 
      }    
  } 
  if(formaDePagamento == "pix" || formaDePagamento == "dinheiro" ){
        retorno.desconto = retorno.valorTotal * 0.05
  }
        retorno.valorFinal += retorno.valorTotal - retorno.desconto

  if(pecas > 10 || retorno.valorFinal > 800.0) {

          console.log(`Parabéns,você ganhou um cupom de R$50,00 para sua próxima compra!`)
  } 

    
}
console.log(valorComDesconto)

