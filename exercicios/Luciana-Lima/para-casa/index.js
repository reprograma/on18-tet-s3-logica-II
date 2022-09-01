let clienteLilit = [
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

let clienteGabi = [
  {produto: 'Salto agulha 34', valor: 250.0}, 
  {produto: 'Tênis casual azul', valor: 120.0}, 
  {produto: 'meia calça transparente', valor: 80.0}]
  
let clienteAndressa = [
  {produto: 'Calça jeans', valor: 89.0}, 
  {produto: 'Tênis preto', valor: 62.0}, 
  {produto: 'Jaqueta Jeans', valor: 550.0}, 
  {produto: 'Blusa preta', valor: 190.0}]
    
    

const hoje = new Date();
const dataFormatada = hoje.toLocaleDateString("pt-BR");
console.log('LOJA DE ROUPAS SUPER DESCONTÃO')
console.log('Cupom Fiscal')
console.log(dataFormatada);

 function calcularDesconto( Cliente,metodo) {
      let valorTotal 
      let desconto 
      let valorFinal 
      let totalPecas = 0
      let somaValorProd = 0
      let somaDesc = 0
      
     // let metodo = 'pix';
      for (let prod of Cliente) {
        totalPecas++;
        
        if( prod.valor >= 60 && prod.valor < 100) {
        //individual
        valorTotal=prod.valor
        desconto = valorTotal * 10/100
        valorFinal= valorTotal - desconto  
        //acumulativa
        somaValorProd += valorTotal
        somaDesc += desconto
        

        console.log(totalPecas,'PRODUTO:',prod.produto )
        console.log('VALOR:',prod.valor ,'DESCONTO:',desconto,'VALOR FINAL:',valorFinal)
        console.log('------------------------------------------------------------------------------')
        
        } else if ( prod.valor >= 100 && prod.valor < 200) {
          //individual
          valorTotal=prod.valor
          desconto = valorTotal * 20/100
          valorFinal= valorTotal - desconto  
          //acumulativa
          somaValorProd += valorTotal
          somaDesc += desconto
          
          //exibe
          console.log(totalPecas,'PRODUTO:',prod.produto )
          console.log('VALOR:',prod.valor ,'DESCONTO:',desconto,'VALOR FINAL:',valorFinal)
          console.log('-------------------------------------------------------------------------------')
          
        } else if (prod.valor >= 200) {
          //individual
          valorTotal=prod.valor
          desconto = valorTotal * 50/100
          valorFinal= valorTotal - desconto  
          //acumulativa
          somaValorProd += valorTotal
          somaDesc += desconto
          
          //exibe
          console.log(totalPecas,'PRODUTO:',prod.produto )
          console.log('VALOR:',prod.valor ,'DESCONTO:',desconto,'VALOR FINAL:',valorFinal)
          console.log('-------------------------------------------------------------------------------')
       
        } else if (prod.valor < 60) {
          //individual
          valorTotal=prod.valor
          desconto = 0
          valorFinal= valorTotal - desconto
          //acumulativa
          somaValorProd = somaValorProd + valorTotal
          somaDesc += desconto
          
          //exibe
          console.log(totalPecas,'PRODUTO:',prod.produto )
          console.log('VALOR:',prod.valor ,'DESCONTO:',desconto,'VALOR FINAL:',valorFinal)
          console.log('-------------------------------------------------------------------------------')
        } 
      
          //console.log(totalPecas);
      } 

    console.log("Total da nota:",somaValorProd,"Total descontos:",somaDesc)
    console.log('qtdPecas:',totalPecas)

    let aPagar = somaValorProd;

      if (metodo == 'pix'|| metodo == 'dinheiro'){
        let extra = somaValorProd * 5 /100;
        aPagar = somaValorProd - extra;
       
        console.log('==============================================================')
        console.log('Aplicado:Desconto extra de 5% para pagamento à vista ou pix')
        console.log('Valor desconto:',extra)
        console.log('Total com desconto extra:',aPagar)

      }

      if (totalPecas > 10 || aPagar > 800){
        console.log('|||Parabéns , você ganhou um cupom de R$ 50,00 para sua póxima compra!|||')
      }
    console.log(hoje); // 2022-08-27T10:56:49.693Z
  return console.log('\nTOTAL A PAGAR',aPagar,)
}


console.log('\nCliente 1 : Lilit Bandeira')
calcularDesconto(clienteLilit , 'pix')  
console.log('\nCliente 2 : Gabriela Andrade')
calcularDesconto(clienteGabi,'cartao')
console.log('\nCliente 3 :Andressa Amorim')
calcularDesconto(clienteAndressa,'dinheiro')  

