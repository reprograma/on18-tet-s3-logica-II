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
let clienteEliza = {
  pagamento: 'à vista',
  carrinho: [
  {produto: 'Bolsa pequena', valor: 49.0}, 
  {produto: 'Cinto preto', valor: 62.0}, 
  {produto: 'Jaqueta Jeans', valor: 350.0}, 
  {produto: 'Calça preta', valor: 290.0}, 
  {produto: 'Blusa simples', valor: 35.0}
]
}
let clienteSabrina = {
  pagamento: 'parcelado',
  carrinho: [
  {produto: 'Bolsa pequena', valor: 49.0}, 
  {produto: 'Cinto preto', valor: 62.0}, 
  {produto: 'Jaqueta Jeans', valor: 350.0}
]
}  
  function carrinho(cliente) {
    let valordoDesconto = 0;
    let valorposDesconto = 0;
    let valorTotalsemDesconto = 0;
    let valorToTaldeDesconto = 0;
    let valordoDescontopix = 0;
  
    const data = new Date().toLocaleString();
    console.log(`Compra realizada em: ${data} `);
  
    for (let item of cliente.carrinho) {
      if (item.valor >= 60 && item.valor < 100) {
        valordoDesconto = item.valor * 10 / 100;
        valorposDesconto = item.valor - valordoDesconto;
      } else if (item.valor >= 100 && item.valor < 200) {
        valordoDesconto = item.valor * 20 / 100;
        valorposDesconto = item.valor - valordoDesconto;
      } else if (item.valor >= 200) {
        valordoDesconto = item.valor * 50 / 100;
        valorposDesconto = item.valor - valordoDesconto;
      } else {
        valordoDesconto = 0;
        valorposDesconto = item.valor;
      }
      valorTotalsemDesconto = valorTotalsemDesconto + item.valor;//786
      valorToTaldeDesconto = valorToTaldeDesconto + valordoDesconto;//326,20
      valorFinalcomDesconto = valorTotalsemDesconto - valorToTaldeDesconto;
  
      if (cliente.pagamento == 'pix' || cliente.pagamento == 'à vista') {
        valordoDescontopix = valorFinalcomDesconto * 5 / 100;
        valorFinal = valorFinalcomDesconto - valordoDescontopix;
      } else {
        valordoDescontopix = 0;
        valorFinal = valorFinalcomDesconto;
      }
    }
    if (cliente.carrinho.length > 10 || valorFinal > 800) {
      console.log('Você ganhou um cupom de R$ 50 para utilizar na próxima compra.');
    }
    console.log("O seu valor total sem desconto é: " + valorTotalsemDesconto);
    console.log("O valor total de descontos foi: " + valorToTaldeDesconto);
    console.log("O valor final a pagar após os descontos é de: " + valorFinal);
  } 

  carrinho(clienteLilit);
console.log("----------------------------------------------------");
  carrinho(clienteEliza);
  console.log("--------------------------------------------------");
  carrinho(clienteSabrina);
  console.log("--------------------------------------------------");
