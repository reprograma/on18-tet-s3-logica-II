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
  ], data: new Date()
}
let clienteana = {
  pagamento: 'a vista',
  carrinho: [
    {produto: 'Blusa Rosa', valor: 79.0},
    {produto: 'calca jeans', valor: 60.0},
    {produto: 'conjunto pijama', valor: 79.0}
  ], data: new Date()
}
let clienterenata = {
  pagamento: 'credito',
  carrinho: [
    {produto: 'calca legging', valor: 60.0},
    {produto: 'calca jeans', valor: 70.0},
    {produto: 'saia roxa', valor: 80.0},
    {produto: 'blusa amarela', valor: 59.0},
    {produto: 'top preto', valor: 38.0},
    {produto: 'blusa bege', valor: 89.0},
    {produto: 'sandalha 38', valor: 100.0},
    {produto: 'calca moleton preta', valor: 35.0},
    {produto: 'meias 6', valor: 15.0},
    {produto: 'tenis vermelho 38', valor: 205.0},
  ], data: new Date()
}
  function aplicarDescontos (cliente){
  let valorOriginalTotal = 0
  let valorComDescontoFinal = 0
  let valorComDescontoTotal = 0
  let quantPecas = cliente.carrinho.length
  //for of como loop que vai repetir o processo
  //para todos os valores do carrinho
  for (let valorOriginal of cliente.carrinho){
  const descontos = [0, 10, 20, 50]
  let descontoTeste = 0
  //if vai testar o valor do produto e responder com
  //um case especifico para calcular
  if (valorOriginal.valor>=60 && valorOriginal.valor<100){
    descontoTeste = 10}
    else if (valorOriginal.valor>=100 && valorOriginal.valor<200){
      descontoTeste = 20
    }
    else if (valorOriginal.valor>200){
    descontoTeste = 50
    }
    else{descontoTeste = 0}
    //switch puxa o produto e trata de acordo com o case
  switch (descontoTeste){
    case 10:
      valorComDesconto=valorOriginal.valor*0.9;
      valorComDescontoTotal+=valorComDesconto
      valorOriginalTotal+=valorOriginal.valor
      //console.log(valorComDesconto)
      break;
    case 20:
      valorComDesconto=valorOriginal.valor*0.8;
      //console.log(valorComDesconto)
      valorComDescontoTotal+=valorComDesconto
      valorOriginalTotal+=valorOriginal.valor
      break;
      case 50:
        valorComDesconto=valorOriginal.valor*0.5;
        //console.log(valorComDesconto)
        valorComDescontoTotal+=valorComDesconto
        valorOriginalTotal+=valorOriginal.valor
        break;
      default:
        valorComDesconto=valorOriginal.valor
        valorOriginalTotal+=valorOriginal.valor
        //console.log(valorOriginal.valor)
      }
  }
  //valores finais sendo ajustados para output
  console.log(`Quantidade de produtos: ${quantPecas}`)
  console.log(`forma de pagamento: ${cliente.pagamento}`)
   //forma de pagamento da cliente
   if (cliente.pagamento == "pix" || cliente.pagamento == 'a vista'){
   valorComDescontoFinal = valorComDescontoTotal*0.95
   console.log("Desconto de 5% aplicado por forma de pagamento")}
   else {valorComDescontoFinal = valorComDescontoTotal}
   console.log(`Total: R$ ${valorOriginalTotal}`)
   console.log(`Total com Descontos: R$ ${valorComDescontoFinal.toFixed(2)}`)
   //teste para cupom
   if (quantPecas>10 || valorComDescontoFinal>800){
    console.log("Cupom de R$50,00 para próxima compra = OK")
   }
   else {console.log("Cupom apenas para compras acima de 10 itens ou com valor acima de R$ 800,00")}
   console.log(`Data da compra: ${cliente.data.toLocaleDateString("pt-BR")}`)
   console.log(`Hora: ${cliente.data.getHours()}:${cliente.data.getMinutes()}`)
  console.log("==============================")
}
aplicarDescontos(clienteLilit)
aplicarDescontos(clienteana)
aplicarDescontos(clienterenata)