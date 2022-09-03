

let clienteLilit = {
  pagamento: 'pix',
  carrinho: [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 62.0}, 
    {produto: 'Jaqueta Jeans', valor: 350.0}, 
    {produto: 'Calça preta', valor: 290.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, +
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 80.0}
  ]
}

let clienteMarcela = {
  pagamento: 'a vista',
  carrinho: [
    {produto: 'Bolsa pequena', valor: 90.50}, 
    {produto: 'Cinto preto', valor: 60.0}, 
    {produto: 'Jaqueta Jeans', valor: 240.0}, 
 
  ]
}

let clienteJanete = {
  pagamento: 'a vista',
  carrinho: [
    {produto: 'Bolsa pequena', valor: 29.0}, 
 
  ]
}



function cliente(nomeCliente){

  let pessoa=nomeCliente.pagamento

      let valoresTotal=0
       nomeCliente.carrinho.forEach(produtos => {
       valoresTotal += produtos.valor
      // let listsValoresProdutos
 
    
      ModuloPagamento(pessoa,[valoresTotal])
    });

}


function ModuloPagamento(tipo,valoresProdutos){


  if(tipo==='pix' || tipo==='a vista'){
     
      caixa(tipo,valoresProdutos)
      return true
      
  }

  else{
  console.log('boas compras')
  return false
  }

}
function caixa(tipo,valor){

let descontoExta=0

for(let i=0; i<valor.length; i++){
      if(valor[i] >= 60 && valor[i] < 100 ){
          console.log('desconto de 60%')

          let valorAtual=valor[i]-100/10
          descontoExta=+valorAtual-100/5
          // console.log(descontoExta)
       
  
          soma(descontoExta)
          break
          

      }
      else if(valor[i]>=100 && valor[i]<200 ){
          console.log('desconto de 100%')
          let valorAtual=valor[i]-100/20
          descontoExta=+valorAtual-100/5
          
          soma(descontoExta)
        
      }
      else if(valor[i]>=200 ){
          console.log('desconto de 200%')
          let valorAtual=valor[i]-100/50
          let descontoExta=+valorAtual-100/5
         
          soma(descontoExta)
      }
      else{

        
        descontoExta=+valor[i]
         soma(descontoExta)
        
      }
      
}
//  console.log(descontoExta)
}

function soma(produtos){

let array=produtos
console.log(array)

for(let i=0; i<array.length; i++){
console.log([i])
}


}





cliente(clienteMarcela)