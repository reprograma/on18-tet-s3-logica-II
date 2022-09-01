let cliente = [];
let clienteLilit = [
    { produto: 'Bolsa pequena', valor: 49.0 },
    { produto: 'Cinto preto', valor: 62.0 },
    { produto: 'Jaqueta Jeans', valor: 350.0 },
    { produto: 'Calça preta', valor: 290.0 },
    { produto: 'Blusa simples', valor: 35.0 },
    { produto: 'Calça jeans clara', valor: 130.0 },
    { produto: 'Blusa preta gola alta', valor: 60.0 },
    { produto: 'Short verde canelado', valor: 80.0 },
    { produto: 'Salto agulha 39', valor: 250.0 },
    { produto: 'Tênis casual preto', valor: 120.0 },
    { produto: 'meia calça transparente', valor: 80.0 },
  ]

let clientePaloma = [
    { produto: 'Jaqueta Jeans', valor: 350.0 },
    { produto: 'Tênis casual preto', valor: 120.0 },
    { produto: 'meia calça transparente', valor: 80.0 },
    { produto: 'Blusa simples', valor: 35.0 },
    { produto: 'Blusa preta gola alta', valor: 60.0 },
  ]

let clienteLeo = [
    { produto: 'Cinto preto', valor: 62.0 },
    { produto: 'Jaqueta Jeans', valor: 350.0 },
    { produto: 'Blusa simples', valor: 35.0 },
  ]

function SomarValorCarrinho(parametro_cliente) {
  let valorTotal = 0
  let desconto = 0
  let descontoTotal = 0
  let valorFinal = 0
  let cupom = 0
  let descontoPIX = 0
  clientePagamento = 0
  let prodruto = 0
  let data = new Date();
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let segundo = data.getSeconds();
  let dataHora = `${hora}:${minuto}:${segundo} ${dia}/${mes}/${ano} `
  
  for (let produto of clientePaloma) {
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
    if (clientePagamento == 'pix' || clientePagamento == 'à vista') {
      valorTotal = descontoTotal * 0.05
    }
    if (produto.valor >= 10.0 || produto.valor >= 800.0) {
      cupom = 50.0
    }
    valorFinal = (valorTotal - descontoTotal);
  }
  console.table(clientePaloma)
  console.log('-----------------------------------')
  console.log('Valor das suas compras R$: ' + valorTotal)
  console.log('Valor de desconto R$: '  + descontoTotal)
  console.log('Você possui um total de '+ cupom + ' reais de desconto para próxima compra!')
  console.log(dataHora)
}

SomarValorCarrinho(cliente.clientePaloma)
