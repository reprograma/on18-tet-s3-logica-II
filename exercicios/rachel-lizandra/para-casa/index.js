var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = (dataAtual.getMonth() + 1);
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();
console.log("Compra realizada no dia " + dia + "/" + mes + " de " + ano + " às " + horas + ":" + minutos + "h.");

let clienteLilit = {
    compras: [
    {item: 'Bolsa pequena', valor: 49.0}, 
    {item: 'Cinto preto', valor: 62.0}, 
    {item: 'Jaqueta Jeans', valor: 350.0}, 
    {item: 'Calça preta', valor: 290.0}, 
    {item: 'Blusa simples', valor: 35.0}, 
    {item: 'Calça jeans clara', valor: 130.0}, 
    {item: 'Blusa preta gola alta', valor: 60.0}, 
    {item: 'Short verde canelado', valor: 80.0}, 
    {item: 'Salto agulha 39', valor: 250.0}, 
    {item: 'Tênis casual preto', valor: 120.0}, 
    {item: 'meia calça transparente', valor: 80.0}
  ]
}
let clienteNatalia = {
    compras: [
    {item: 'Calça jeans clara', valor: 130.0}, 
    {item: 'Blusa preta gola alta', valor: 60.0}, 
    {item: 'Short verde canelado', valor: 80.0},
    {item: 'Bolsa pequena', valor: 50.0}
      ]
}
let clienteRachel = {
    compras:[
    {item: 'Blusa simples', valor: 35.0},
    {item: 'Bolsa pequena', valor: 49.0},
      ]
}

function calcular(lista, formaDePagamento){
      let pecas = lista.length
      
      let retorno = {
            valorTotal: 0,
            desconto: 0,
            valorFinal: 0
      }
      
      let valorComDesconto = 0

      for (produto of lista){
            retorno.valorTotal += produto.valor        
            
            if (produto.valor >= 60.0 && produto.valor < 100.0){
                  valorComDesconto = produto.valor - (produto.valor * 0.10)
                  console.log(`Ao comprar uma peça de ${produto.item} você ganhou 10% de desconto neste produto`)
                  
            }
            else if (produto.valor >= 100.0 && produto.valor < 200.0){
                valorComDesconto = produto.valor - (produto.valor * 0.20)
                console.log(`Ao comprar uma peça de ${produto.item} você ganhou 10% de desconto neste produto`)
                  
            }
            else if (produto.valor >= 200.0 ){
                valorComDesconto = produto.valor - (produto.valor * 0.50)  
                console.log(`Ao comprar uma peça de ${produto.item} você ganhou 10% de desconto neste produto`)
            }    
      
      }  
      if(formaDePagamento == "pix" || formaDePagamento == "dinheiro" ){

            retorno.desconto = retorno.valorTotal * 0.05
      }
            retorno.valorFinal = retorno.valorTotal - retorno.desconto

      if(pecas > 10 || retorno.valorFinal > 800.0) {
            console.log("Você ganhou um cupom de R$50,00 na sua próxima compra")  
      } 
      
      console.log(`Você comprou ${pecas} peças.`)
      console.log(retorno)
}

calcular(clienteLilit.compras,"pix")
console.log('-------------------------');
calcular(clienteNatalia.compras, "pix")
console.log('-------------------------');
calcular(clienteRachel.compras, "dinheiro" )
console.log('-------------------------');