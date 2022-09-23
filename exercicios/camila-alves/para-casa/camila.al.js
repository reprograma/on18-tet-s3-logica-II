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
      {produto: 'meia calça transparente', valor: 80.0},
    ]
      }
      function somar(valores) {
    let soma = 49 + 62 + 350+ 290 + 35 + 130 + 60 + 80 + 250 + 120 + 80
    return console.log (soma)
  } 
   somar() 

   let valortotal = 1506
   
   if (valortotal >= 60 && valortotal < 100) {
    console.log("Você ganhou 10% de desconto")
  } else if (valortotal >= 100 && valortotal < 200) {
    console.log("Você ganhou 20% de desconto")
  } else if (valortotal >= 200) {
    console.log("Você ganhou 50% de desconto")
  } else {
    console.log("Você ainda não atingiu o mínimo para conseguir um desconto!")
}


