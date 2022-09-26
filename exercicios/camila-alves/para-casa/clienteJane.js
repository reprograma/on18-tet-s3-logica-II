let clienteJane = {
    pagamento: 'pix',
    carrinho: [
      {produto: 'Vestido preto', valor: 200.0}, 
      {produto: 'Saia cinza', valor: 62.0}, 
      {produto: 'Jaqueta de coura preta', valor: 250.0}, 
      {produto: 'Calça flare azul', valor: 120.0}, 
      {produto: 'Camiseta', valor: 70.0}, 
      {produto: 'Calça sarja verde', valor: 150.0}, 
      {produto: 'Blusa preta', valor: 100.0}, 
      {produto: 'Short preto acinturado', valor: 120.0},
    ]
  }

  function finalizarCompra(compra) {

    let valorTotal = 0
    let descontoAplicado = 0
    let valorFinal = 0
    let quantidadeDeProdutos = compra.carrinho.length

    for(let item of compra.carrinho) {
      valorTotal += item.valor
      if(item.valor >= 200.0) {
        console.log('%200', item.produto, item.valor)
        let desconto = item.valor * 0.5
        descontoAplicado += desconto
        valorFinal += item.valor - desconto
      } else if(item.valor >= 100.0) {
        console.log('%100', item.produto, item.valor)
        let desconto = item.valor * 0.2
        descontoAplicado += desconto
        valorFinal += item.valor - desconto
      } else if(item.valor >= 60.0) {
        console.log('%60', item.produto, item.valor)
        let desconto = item.valor * 0.1
        descontoAplicado += desconto
        valorFinal += item.valor - desconto
      } else {
        console.log("Você ainda não atingiu o valor mínimo de desconto")
        valorFinal += item.valor
      }

      }

      if(compra.pagamento == "pix" || compra.pagamento == "à vista") {
        let desconto = valorFinal * 0.05
        console.log("DESCONTO DE 5%", desconto)
        valorFinal -= desconto
        descontoAplicado += desconto
        console.log("VALOR FINAL PARA PIX/AVISTA", valorFinal)


        console.log(quantidadeDeProdutos)
        console.log(valorTotal)
        console.log(descontoAplicado)
        console.log(valorFinal)

        let notaFiscal = {
          "Valor total": valorTotal, 
          "Desconto Aplicado": descontoAplicado,
          "Valor à Pagar": valorFinal
        }

        if(quantidadeDeProdutos > 10 || valorFinal > 800.0) {
          notaFiscal["Bônus"] = "Você ganhou um cupom de R$ 50,00 para a sua próxima compra"
        }

        console.table(notaFiscal)
      }

      
    }
    
  finalizarCompra(clienteJane)
  