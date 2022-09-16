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
  {produto: 'meia calça transparente', valor: 80.0}]
  }

  let clienteWendson = {
    pagamento: 'cartao de credito',
    carrinho: [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 62.0}, 
    {produto: 'Jaqueta Jeans', valor: 350.0}, 
    {produto: 'Calça jeans clara', valor: 130.0},  
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 80.0}]
    }

    let clienteKaroline = {
      pagamento: 'dinheiro',
      carrinho: [ 
      {produto: 'Cinto preto', valor: 62.0}, 
      {produto: 'Jaqueta Jeans', valor: 350.0}, 
      {produto: 'Calça preta', valor: 290.0}, 
      {produto: 'Blusa simples', valor: 35.0}, 
      {produto: 'Blusa preta gola alta', valor: 60.0}, 
      {produto: 'Short verde canelado', valor: 80.0}, 
      {produto: 'Salto agulha 39', valor: 250.0} 
      ]
      }

  function checkoutCarrinho(cliente){
    let cupom = false
    let valorTotal = 0
    let valorDesconto = 0
    let valorFinal = 0
    for (let produto of cliente.carrinho) {
      let valorPromocao = produto.valor
      valorTotal = valorTotal + produto.valor
      if(valorPromocao >= 60 && valorPromocao < 100){
          valorPromocao = valorPromocao *0.9;
      }else if(valorPromocao >= 100 && valorPromocao < 200){
        valorPromocao = valorPromocao *0.8;
      }else if(valorPromocao >= 200 && valorPromocao < 10000){
            valorPromocao = valorPromocao *0.5;
            
    }
    valorDesconto = valorDesconto + produto.valor - valorPromocao
    valorFinal = valorTotal - valorDesconto

  }
    if (valorFinal > 800) {
      cupom = true
    }
    if(cupom) {
     
      return console.log({valorTotal: valorTotal, valorDesconto: valorDesconto, valorFinal: valorFinal, cupom: 'Você ganhou um cupom de R$ 50,00 na sua próxima compra!'})
    }
      return console.log({valorTotal: valorTotal, valorDesconto: valorDesconto, valorFinal: valorFinal})
  }

  checkoutCarrinho(clienteLilit)
  
  checkoutCarrinho(clienteWendson)
  
  checkoutCarrinho(clienteKaroline)