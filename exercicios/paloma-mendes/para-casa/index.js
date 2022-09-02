let clienteLilit = [
  { produto: 'Bolsa pequena', valor: 49.0 },
  { produto: 'Cinto preto', valor: 62.0 },
  { produto: 'Jaqueta Jeans', valor: 350.0 },
  { produto: 'Calça preta', valor: 290.0 },
  { produto: 'Blusa simples', valor: 35.0 },
  { produto: 'Calça jeans clara', valor: 130.0 },
  { produto: 'Blusa preta gola alta', valor: 60.0 },
  { produto: 'Salto agulha 39', valor: 250.0 },
  { produto: 'Tênis casual preto', valor: 120.0 },
  { produto: 'meia calça transparente', valor: 80.0 },
]

let clientePaloma = [
  { produto: 'Jaqueta Jeans', valor: 35.0 },
  { produto: 'Tênis casual preto', valor: 12.0 },
  { produto: 'meia calça transparente', valor: 80.0 },
  { produto: 'Blusa simples', valor: 35.0 },
  { produto: 'Blusa preta gola alta', valor: 60.0 },
  { produto: 'Salto agulha 39', valor: 25.0 },
  { produto: 'Calça jeans clara', valor: 13.0 },
  { produto: 'meia calça transparente', valor: 8.0 },
  { produto: 'Bolsa pequena', valor: 9.0 },
  { produto: 'Blusa preta gola alta', valor: 6.0 },
  { produto: 'Short verde canelado', valor: 80.0 },
]

let clienteLeo = [
  { produto: 'Cinto preto', valor: 60.0 },
  { produto: 'Jaqueta Jeans', valor: 400.0 },
  { produto: 'Blusa simples', valor: 100.0 },
]

function somarValorCarrinho(parametro_cliente, formaPagamento) {
  let valorTotal = 0
  let desconto = 0
  let descontoTotal = 0
  let valorFinal = 0
  let cupom = 0
  let descontoPagamento = 0
  let produto = 0
  let data = new Date();
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let segundo = data.getSeconds();
  let dataHora = `${hora}:${minuto}:${segundo} ${dia}/${mes}/${ano}`
  let totalPecas = parametro_cliente.length;

  for (produto of parametro_cliente) {
    valorTotal = valorTotal += produto.valor;

    if (produto.valor >= 60.0 && produto.valor < 100.0) {
      desconto += produto.valor * 0.1
      descontoTotal = desconto
    } else if (produto.valor >= 100.0 && produto.valor < 200.0) {
      desconto = produto.valor * 0.2
      descontoTotal = desconto
    }
    else if (produto.valor >= 200.00 && produto.valor < 200.0) {
      desconto = produto.valor * 0.5
      descontoTotal = desconto
    }
    if (formaPagamento == 'pix' || formaPagamento == 'à vista') {
      descontoPagamento = descontoTotal * 0.05
    }
    if (totalPecas > 10.0 || valorFinal > 800.0) {
      cupom = 50
    }
    valorFinal = (valorTotal - descontoTotal - descontoPagamento);
  }
  console.log('-----------------SUAS COMPRAS-----------------')
  console.table(parametro_cliente)
  console.log('Valor das suas compras R$: ' + valorTotal)
  console.log('Valor de desconto R$: ' + descontoTotal)
  console.log('Desconto pela forma de pagamento R$: ' + descontoPagamento.toFixed(2))
  console.log('Valor total a pagar R$: ' + valorFinal)
  console.log('Você possui um cupom de R$: ' + cupom + ' reais de desconto para próxima compra!')
  console.log(dataHora)
  
}

somarValorCarrinho(clienteLilit, 'pix')
somarValorCarrinho(clientePaloma, 'credito')
somarValorCarrinho(clienteLeo, 'à vista')