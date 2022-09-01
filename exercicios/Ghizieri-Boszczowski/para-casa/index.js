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

let clienteGhi = {
  pagamento: 'à vista',
  carrinho: [
    {produto: 'Pochete', valor: 29.0}, 
    {produto: 'Vestido longo branco', valor: 180.0}, 
    {produto: 'Vestido longo preto', valor: 120.0}, 
    {produto: 'Vestido longo rosa', valor: 120.0}, 
    {produto: 'Biquini', valor: 45.0}    
  ]
}

let clienteAmanda = {
  pagamento: 'pix',
  carrinho: [
    {produto: 'Tenis infantil', valor: 55.0}, 
    {produto: 'camiseta de personagem', valor: 30.0}, 
    {produto: 'caneca', valor: 25.0},
    {produto: 'massinha', valor: 15.0},
    {produto: 'massinha', valor: 15.0},
    {produto: 'massinha', valor: 15.0},
    {produto: 'massinha', valor: 10.0},
    {produto: 'massinha', valor: 20.0},
    {produto: 'massinha', valor: 20.0},
    {produto: 'conunto de talheres de brinquedo', valor: 10.0},
    {produto: 'conunto de talheres de brinquedo', valor: 20.0},
  ]
}

function realiza_compra(cliente) {
  let inforamacao_compra = {
    total: 0,
    desconto: 0,
    valor_final: 0,
    cupom: false,
    hora_compra: new Date()
  };

  for (const produto of cliente.carrinho) {
    inforamacao_compra.total += produto.valor;
    
    if( produto.valor >= 200 ) {
      inforamacao_compra.desconto += produto.valor * 0.5;
    } else if( produto.valor >= 100 ) {
      inforamacao_compra.desconto += produto.valor * 0.2;
    } else if( produto.valor >= 60 ) {
      inforamacao_compra.desconto += produto.valor * 0.1;
    }
  }

  if( cliente.pagamento === "pix" || cliente.pagamento === "à vista" ) {
    inforamacao_compra.desconto += inforamacao_compra.total * 0.05;
  }

  inforamacao_compra.valor_final = inforamacao_compra.total - inforamacao_compra.desconto;

  inforamacao_compra.cupom = cliente.carrinho.length > 10 || inforamacao_compra.valor_final > 800

  return inforamacao_compra;
}

console.log( "Lilit", realiza_compra(clienteLilit) );
console.log( "Ghi", realiza_compra(clienteGhi) );
console.log( "Amanda", realiza_compra(clienteAmanda) );