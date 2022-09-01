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
valorTotalComDesconto = 0
for (let produto of clienteLilit.carrinho){
  produtoEmPromoção = produto.valor
  if (produtoEmPromoção < 100 && produtoEmPromoção >= 60) {
    produtoEmPromoção = produtoEmPromoção - (produtoEmPromoção * 0.10)
    console.log("Seu produto entrou em promoção de 10% de desconto")
  } else if (produtoEmPromoção < 200 && produtoEmPromoção >= 100) {
    produtoEmPromoção = produtoEmPromoção - (produtoEmPromoção * 0.20)
    console.log("Seu produto entrou em promocação de 20% de desconto")
  } else if (produtoEmPromoção >=200) {
    produtoEmPromoção = produtoEmPromoção - (produtoEmPromoção * 0.50); 
    console.log("Seu produto entrou em promocação de 50% de desconto")
  }
  console.log(produtoEmPromoção)
  valorTotalComDesconto = valorTotalComDesconto + produtoEmPromoção
  
  valorTotal = valorTotal + produto.valor
}

let cupom 
   if (valorTotalComDesconto >= 800 || clienteLilit.carrinho.length >= 9){
      cupom = true
    }

console.log("Valor total da compra")
console.log(valorTotal)
console.log("____________________________________________")
console.log("Valor total da compra com desconto")
console.log(valorTotalComDesconto)