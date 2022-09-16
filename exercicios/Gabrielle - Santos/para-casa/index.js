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
 
let clienteGabi = {
  pagamento: 'cartao de credito',
  carrinho:[
  {produto: 'Vestido preto', valor: 69.0}, 
  {produto: 'coturno', valor: 126.90}, 
  {produto: 'chinelo', valor: 50.0}
]}

let clienteLaura = {
  pagamento: 'cartao de credito',
  carrinho:[
  {produto: 'short', valor: 120.0}, 
  {produto: 'tenis', valor: 130.90}, 
  {produto: 'Blusa amarela', valor: 30.0}, 
  {produto: 'oculos', valor: 55.0}
  
]}

let valorTotalComDesconto = 0
let valorFinal = 0
let valorTotal = 0
let valorItens = 0
//Somando os valores
function somarValores(cliente){
  let valorItens = 0
  let valorTotalComDesconto = 0
  let valorFinal = 0
  let valorTotal = 0
   for(let produto of cliente.carrinho){
    valorItens = valorItens + clienteGabi.carrinho.produto
    valorItens += valorItens + produto.valor
  }
  let ProdutoEmPromo = produto.valor
  if (ProdutoEmPromo < 100 && ProdutoEmPromo >=60){
    ProdutoEmPromo = ProdutoEmPromo - ProdutoEmPromo * 0.10;
    console.log("Seu produto entrou em promoção de 10%!")
 }else if (ProdutoEmPromo<200 &&ProdutoEmPromo >=100){
  ProdutoEmPromo = ProdutoEmPromo - ProdutoEmPromo * 0.20;
  console.log("Seu produto entrou em promoção de 20%!")
 } else if (ProdutoEmPromo >=200){
  ProdutoEmPromo = ProdutoEmPromo - ProdutoEmPromo*0.50;
  console.log("Seu produto entrou em promoção de 50%!")
 }
  console.log(ProdutoEmPromo)
  valorTotalComDesconto = valorTotalComDesconto + ProdutoEmPromo
  if (valorTotalComDesconto >=800 || clienteGabi.carrinho.length >=9){
    console.log("Parabéns!Você ganhou um cupom de 50 reais para próxima compra!")}
  valorTotal = valorTotal + produto.valor
  console.log(valorTotalComDesconto)
  valorFinal = valorItens - valorTotalComDesconto 
  return `Valor total: R$${valorItens} | Desconto: R$${valorTotalComDesconto} | Valor final: R$${valorFinal}`
  
}

//Aplicar desconto PIX

// let descontoPIX = valorTotalComDesconto - (valorTotalComDesconto/20)
// console.log(descontoPIX)

    //Aparecer no terminal o valor total 
  console.log('\nCliente 1 : Laura ')
  console.log(clienteLaura.carrinho)
  console.log("\nO valor total da compra e \n" + valorFinal)
  console.log("O valor total com desconto e \n" + valorTotalComDesconto)
  somarValores
  console.log('\nCliente2: Lilit')
  console.log(clienteLilit.carrinho)
  console.log("\nO valor total da compra e \n" + valorFinal)
  console.log("O valor total com desconto e \n" + valorTotalComDesconto)
  somarValores.clienteLilit
  console.log('\nCliente2: Gabi')
  console.log(clienteGabi.carrinho)
  console.log("\nO valor total da compra é\n" + valorFinal)
  console.log("\nO valor total com desconto é \n" + valorTotalComDesconto)
  somarValores.clienteGabi

  // Desafio extra
let data = new Date()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()
let hora = data.getHours()
let minuto = data.getMinutes()
let dataHora = `${dia}/${mes}/${ano} ${hora}:${minuto}`
console.log(dataHora)
