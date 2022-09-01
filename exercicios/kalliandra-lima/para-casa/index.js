  let clienteLilit = {nome: "Lilit",
  pagamento: "pix",
  carrinho: [
  {nome:'Bolsa pequena', valor: 49.0}, 
  {nome: 'Cinto preto', valor: 62.0}, 
  {nome: 'Jaqueta Jeans', valor: 350.0}, 
  {nome: 'Calça preta', valor: 290.0}, 
  {nome: 'Blusa simples', valor: 35.0}, 
  {nome: 'Calça jeans clara', valor: 130.0}, 
  {nome: 'Blusa preta gola alta', valor: 60.0}, 
  {nome: 'Short verde canelado', valor: 80.0}, 
  {nome: 'Salto agulha 39', valor: 250.0}, 
  {nome: 'Tênis casual preto', valor: 120.0}, 
  {nome: 'meia calça transparente', valor: 80.0}]
  }


  let clienteSandra = {nome: "Sandra",
pagamento: "cartão de crédito",
carrinho: [
{nome:'Bolsa pequena', valor: 49.0},  
{nome: 'Jaqueta Jeans', valor: 350.0},  
{nome: 'Blusa simples', valor: 35.0}, 
{nome: 'Calça jeans clara', valor: 130.0},  
{nome: 'Salto agulha 39', valor: 250.0}, 
{nome: 'Tênis casual preto', valor: 120.0}, 
{nome: 'meia calça transparente', valor: 80.0}]
}
  
let clienteShirlene= {nome: "Shirlene",
pagamento: "cartão de débito",
carrinho: [
{nome:'Bolsa pequena', valor: 49.0},  
{nome: 'Jaqueta Jeans', valor: 350.0},  
{nome: 'Blusa simples', valor: 35.0}, 
{nome: 'Calça jeans clara', valor: 130.0},  
{nome: 'Salto agulha 39', valor: 250.0}, 
{nome: 'Tênis casual preto', valor: 120.0}, 
{nome: 'meia calça transparente', valor: 80.0},
{nome: 'Blusa preta gola alta', valor: 60.0},
{nome: 'Short verde canelado', valor: 80.0}, 
{nome: 'Salto agulha 39', valor: 250.0}, 
{nome: 'Tênis casual preto', valor: 120.0}, 
{nome: 'meia calça transparente', valor: 80.0}]
}
  

  
  
  
function resultado(lista){
     let valorTotal = 0
     let descontoTotal = 0
     let saldoTotal = 0
     let descontopix = 0
     let saldopix = 0 


     const data = new Date().toLocaleString();
     console.log(`Compra realizada em: ${data} `);

     for (produto of lista.carrinho){
      if(produto.valor >= 60.00 && produto.valor < 100.00){
        valorTotal += produto.valor
        descontoTotal += produto.valor * 0.1
        saldoTotal += produto.valor * 0.9
      }else if (produto.valor >= 100.00 && produto.valor< 200.00){
        valorTotal += produto.valor
        descontoTotal += produto.valor* 0.2
        saldoTotal += produto.valor * 0.8
      }else if (produto.valor >=200){
        valorTotal += produto.valor
        descontoTotal += produto.valor * 0.5
        saldoTotal += produto.valor * 0.5
      }else {
       valorTotal += produto.valor
       descontoTotal += produto.valor * 0.00
       saldoTotal += produto.valor
      }
     }

      console.log(`Valor original da compra foi de R$: ${(valorTotal).toFixed(2)}`)
      console.log(`Desconto total da compra foi de R$: ${(descontoTotal).toFixed(2)}`)
      console.log(`Saldo final depois das operações foi de R$: ${(saldoTotal).toFixed(2)}`)
      descontopix = saldoTotal*0.05
      saldopix = saldoTotal - descontopix

     if(produto.length >= 10 || saldoTotal >=800){
      console.log(`Cliente ${lista.nome} receberá cupom de R$ 50,00 para próximas compras`)
      }
     if(lista.pagamento === "pix"  || lista.pagamento ===" a vista"){
     console.log(`Cliente ${lista.nome}  receberá R$ ${descontopix} no abatimento da compra referente a desconto de 5%, pagando assim: R$ ${saldopix}`)
     } else{
     console.log(`Cliente ${lista.nome} irá pagar R$ ${saldoTotal}`)
    }
}
resultado(clienteLilit)
console.log('------------------------------------------------------------------------------------------------------------------')
resultado(clienteSandra)
console.log('------------------------------------------------------------------------------------------------------------------')
resultado(clienteShirlene)


































































/*let precoComDesconto = [
  {produto:'Bolsa pequena', valor: 49},
  {produto:'Cinto preto',valor: 55.80},
  {produto:'Jaqueta Jeans',valor: 175},
  {produto:'Calça preta',valor: 145},
  {produto:'Blusa simples',valor: 35},
  {produto:'Calça jeans clara',valor: 104},
  {produto:'Blusa preta gola alta',valor:54},
  {produto:'Short verde canelado',valor: 72},
  {produto:'Salto agulha 39',valor: 125},
  {produto:'Tênis casual preto',valor:96},
  {produto:'meia calça transparente',valor: 72}
]

let precoComDescontoitem = [
  {nome:'Bolsa pequena'},
  {nome:'Cinto preto'},
  {nome:'Jaqueta Jeans'},
  {nome:'Calça preta'},
  {nome:'Blusa simples'},
  {nome:'Calça jeans clara'},
  {nome:'Blusa preta gola alta'},
  {nome:'Short verde canelado'},
  {nome:'Salto agulha 39'},
  {nome:'Tênis casual preto'},
  {nome:'meia calça transparente'}
]

let precoComDescontovalor = [49, 49.6,175,145,35,117,48,64,125,108,64]


function somar() {
  let soma = 0
  for (let i in precoComDescontovalor){
    soma += precoComDescontovalor[i]
  }
return soma
}

console.log(`Saldo da compra deu: R$`,(somar(precoComDescontovalor )))


function cupom(lista){

  for(quantidade of lista){
    if(quantidade.length >10){
      console.log(`cliente tem direito a `)

    }
  }

console.log(precoComDescontoitem.length)
}*/











/*let final = [{nome: "Lilit"},
{pagamento: "pix"},
{itens: [
  {produto:'Bolsa pequena'},{produto:'Cinto preto'},{produto:'Jaqueta Jeans'},{produto:'Calça preta'},{produto:'Blusa simples'},
  {produto:'Calça jeans clara'},{produto:'Blusa preta gola alta'},{produto:'Short verde canelado'},{produto:'Salto agulha 39'},
  {produto:'Tênis casual preto'},{produto:'meia calça transparente'}]},
{precoFinal: [49, 49.6,175,145,35,117,48,64,125,108,64]}]

function resultadoFinal(lista){

  let saldoApagar = new Object

  for (cliente of lista){
    if(final.pagamento == "pix" ||final.pagamento == "a vista"){
      saldoApagar[cliente.nome] = `irá pagar ${(somar(precoFinal)*0,95)}, referente ao desconto de 5%`
    } else {
      saldoApagar[cliente.nome]= `irá pagar ${(somar(precoFinal))} e não receberá desconto de 5%`

    } if (cliente.itens >= 10 || (somar(precoFinal)) >= 800.00){
      saldoApagar[cliente.nome]= `irá receber cupom de R$ 50.00 para próximas compras`
    } else if (cliente.itens < 10 || (somar(precoFinal)) < 800.00){
      saldoApagar[cliente.nome]= `não irá receber cupom de R$ 50.00 para próximas compras`
    }else{
      saldoApagar[cliente.nome]= `pagará ${(somar(precoFinal))}`
    }
  }
   console.log(saldoApagar)
  }

  resultadoFinal(final)*/

  
  