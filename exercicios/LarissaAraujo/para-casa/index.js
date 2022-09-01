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

//let clienteCassia = {
//  pagamento: 
//} 

  function descontoPorProduto(lista){
    let valortotal = 0
    let descontoTotal = 0

    for (produto of lista.carrinho){
      if(produto.valor >= 60.00 && produto.valor < 100.00){
        valortotal += produto.valor
        descontoTotal += produto.valor * 0.1
        valorFinal += produto.valor * 0.9
      }
      else if (produto.valor >= 100.00 && produto.valor < 200.00){
        valortotal += produto.valor
        descontoTotal += produto.valor * 0.2
        valorFinal += produto.valor * 0.8
      } 
      else if (produto.valor >= 200.00){
        valortotal += produto.valor
        descontoTotal += produto.valor * 0.5
        valorFinal += produto.valor * 0.5
      }
      else {
        valorTotal += produto.valor
        descontoTotal += produto.valor * 0.00
        saldoTotal += produto.valor}
      
    }
  }

  descontoPorProduto(carrinho.produto)
  
