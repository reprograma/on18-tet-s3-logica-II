// FOR
// for (expressapInicial; condicao; incremento) {
// código aqui
// }

//for(let i = 0; i <= 10; i++){
//    console.log(`número ${i}`)
//}

// let alunas = ["Natália","Meujaela","Gabriele"]
//let numero = 2
//let numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];

//console.log(numeros.length)

//console.log(numeros[0])
//console.log(numeros[1])
//console.log(numeros[2])

//for(let i = 0; i < numeros.length; i++){
//    const dobro = numeros[i] * 2
//   console.log(dobro)
//}

//WHILE

//while(condição){
//   código aqui
//}

//let i = 0
//while(i < numeros.length){
//    const dobro = numeros[i] * 2
//    console.log(dobro)
//i++
//}

// FOR/OF

//for(let numero of numeros){
//    const dobro = numero * 2;
//    console.log(dobro)
//}

//EXERCICIO COD INICIAL (so pra não ter chance de perder o que ta fundionando)

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
  
    function checkoutCarrinho(clienteLilit){
      let cupom = false
      let valorTotal = 0
      let valorDesconto = 0
      let valorFinal = 0
      for (let produto of clienteLilit.carrinho) {
        let valorPromocaoDez = produto.valor
        valorTotal = valorTotal + produto.valor
        if(valorPromocaoDez >= 60 && valorPromocaoDez < 100){
            valorPromocaoDez = valorPromocaoDez *0.9;
            console.log(valorPromocaoDez)   
         }
      }
      if(cupom) {
        return console.log({valorTotal: 0, valorDesconto: 0, valorFinal: 0, cupom: 'Você ganhou um cupom de R$ 50,00 na sua próxima compra!'})
      }
        return console.log({valorTotal: valorTotal, valorDesconto: valorDesconto, valorFinal: valorFinal})
    }

    checkoutCarrinho(clienteLilit)
    
    checkoutCarrinho(clienteWendson)
    
    checkoutCarrinho(clienteKaroline)