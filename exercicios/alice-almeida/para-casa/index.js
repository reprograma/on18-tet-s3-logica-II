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

let aplicarDesconto = (produto, desconto) => {
  produto.desconto = (produto.valor * desconto)
  produto.porcentagem = `${desconto * 100}%`
  produto.valorFinal = produto.valor - produto.desconto


  return produto
}

let checarPagamento = (pagamento) => (
  pagamento == "pix" || pagamento == "a vista"
)

let descontoProxCompra = (quantidadeItems, valorTotal) => (
  quantidadeItems > 10 || valorTotal > 800
)

let parsearPedido = (pedido) => {
  let valorTotal = 0
  let pedidoDescontado = []

  for (let produto of pedido.carrinho) {
    if (produto.valor >= 200) {
      produto = aplicarDesconto(produto, 0.5)
    } else if (produto.valor >= 100) {
      produto = aplicarDesconto(produto, 0.2)
    } else if (produto.valor >= 60) {
      produto = aplicarDesconto(produto, 0.1)
    } else {
      produto.valorFinal = produto.valor
    }

    pedidoDescontado.push(produto)
    valorTotal += produto.valorFinal
  }

  
  let descontoTotal = 0
  let totalSemDesconto = 0
  for (produto of pedidoDescontado) {
    totalSemDesconto += produto.valor
    if (produto.desconto) {
      descontoTotal += produto.desconto
    }
  }
  
  if (checarPagamento(pedido.pagamento)) {
    let desconto = valorTotal * 0.05
    valorTotal -= desconto
    descontoTotal += desconto
  }

  data = new Date().toLocaleString('pt-BR').split(' ')

  let retorno = {
    pedido: pedidoDescontado,
    totalSemDesconto: totalSemDesconto.toFixed(2),
    total: valorTotal.toFixed(2),
    descontoTotal: descontoTotal.toFixed(2),
    desconto: descontoProxCompra(pedidoDescontado.length, valorTotal),
    data: data[0],
    hora: data[1]
  }

  return retorno
}


let printarPedido = (pedidoParseado) => {
  let decorador = '=-'.repeat(20)
  let separador = '--'.repeat(50)

  console.log(`\n${decorador} Compra Finalizada! ${decorador.split("").reverse().join("")}`)
  console.log(separador)
  console.table(pedidoParseado.pedido)
  console.log(separador)

  let texto = `\nO total do pedido sem descontos é de R$${pedidoParseado.totalSemDesconto}`
  texto += `\nO total com os descontos aplicados é de R$${pedidoParseado.total}`
  texto += `\nVocê poupou R$${pedidoParseado.descontoTotal} com essa compra!`
  if (pedidoParseado.desconto) {
    texto += `\nVocê ganhou um desconto de R$50,00 para sua próxima compra!`
  }
  texto += `\nPedido efetuado no dia ${pedidoParseado.data} às ${pedidoParseado.hora}`

  console.log(texto)
  console.log(`\n${separador}`)
}

printarPedido(parsearPedido(clienteLilit))
