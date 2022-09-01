let clienteMichel = {
  pagamento: 'dinheiro',
  carrinho: [
  {produto: 'Bolsa pequena', valor: 49.0}, 
  {produto: 'Cinto preto', valor: 62.0}, 
  {produto: 'Jaqueta Jeans', valor: 350.0}, 
  {produto: 'Calça preta', valor: 290.0}, 
  {produto: 'Blusa simples', valor: 35.0}, 
  {produto: 'Calça jeans clara', valor: 130.0}, 
  {produto: 'Blusa preta gola alta', valor: 60.0}, 
  {produto: 'Short verde canelado', valor: 80.0}, 
]
  }



let clienteLeinane = {
 pagamento: 'cartão',
 carrinho: [
    {produto: 'Cinto preto', valor: 62.0}, 
    {produto: 'Jaqueta Jeans', valor: 350.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 80.0}
  ]

}

let clientelilit = {
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
  
 

function ClienteCompra(compra){  
  let pagamento = 0
  let valorTotal = 0
  let valorTotalComDesconto = 0

  for (let produto of compra.carrinho){
      let ProdutoEmPromocao = produto.valor
  
      if (ProdutoEmPromocao >= 60 && ProdutoEmPromocao < 100){
          ProdutoEmPromocao = ProdutoEmPromocao - ProdutoEmPromocao*0.10;
          console.log("seu produto entrou na promoção de 10%!")
  
      }else if(ProdutoEmPromocao >= 100 && ProdutoEmPromocao < 200){
          ProdutoEmPromocao = ProdutoEmPromocao - ProdutoEmPromocao*0.20;
          console.log("seu produto entrou na promoção de 20%!")
  
      }else if(ProdutoEmPromocao > 200){
          ProdutoEmPromocao = ProdutoEmPromocao - ProdutoEmPromocao*0.50;
          console.log("seu produto entrou na promoção de 50%")
      }

      console.log(ProdutoEmPromocao)
      valorTotalComDesconto = valorTotalComDesconto + ProdutoEmPromocao
     
      valorTotal = valorTotal + produto.valor
  }

  console.log("valor Total!")
  console.log(valorTotal)

  console.log("valor com Desconto!")
  console.log(valorTotalComDesconto)

  
  if (valorTotalComDesconto >= 800 || clienteLeinane.carrinho.produto >=9){
      console.log("Parabéns! você ganhou um cupom de 50 reais para próxima compra!")
  }

  if (clienteLeinane.pagamento == 'pix'|| clienteLeinane.pagamento =='dinheiro'){
    valorTotalComDesconto = valorTotalComDesconto -valorTotalComDesconto*0.05;
    console.log("Você recebeu mais 5% de desconto! O valor total da sua compra é de $", + valorTotalComDesconto, "reais!")
  
  }

console.log("................................")

  if (valorTotalComDesconto >= 800 || clientelilit.carrinho.produto >=9){
  console.log("Parabéns! você ganhou um cupom de 50 reais para próxima compra!")
  }

  if (clientelilit.pagamento == 'pix'|| clientelilit.pagamento =='dinheiro'){
    valorTotalComDesconto = valorTotalComDesconto -valorTotalComDesconto*0.05;
    console.log("Você recebeu mais 5% de desconto! O valor total da sua compra é de $", + valorTotalComDesconto, "reais!")
  
  }

console.log("..........................................................")

  if (valorTotalComDesconto >= 800 || clienteMichel.carrinho.produto >=9){
   console.log("Parabéns! você ganhou um cupom de 50 reais para próxima compra!")
  }


  if (clienteMichel.pagamento == 'pix'|| clienteMichel.pagamento =='dinheiro'){
    valorTotalComDesconto = valorTotalComDesconto -valorTotalComDesconto*0.05;
    console.log("Você recebeu mais 5% de desconto! O valor total da sua compra é de $", + valorTotalComDesconto, "reais!")
  
  }



}


ClienteCompra(clienteLeinane)
console.log("........................................................")
ClienteCompra(clienteMichel)
console.log("........................................................")
ClienteCompra(clientelilit)
console.log("........................................................")


