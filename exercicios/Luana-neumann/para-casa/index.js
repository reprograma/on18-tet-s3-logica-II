  
  let clienteLilit = {
    nome: 'Lilit',
    pagamento: 'Pix',
    carrinho: [
      {produto: 'Bolsa pequena', valor: 49.0}, 
      {produto: 'Cinto preto', valor: 62.0},
      {produto: 'Jaqueta Jeans',valor: 350.0},
      {produto: 'Calça preta',valor: 290.0},
      {produto: 'Blusa simples',valor: 35.0},     
      {produto: 'Calça jeans clara',valor: 130.0 },      
      {produto: 'Blusa preta gola alta',valor: 60.0},       
      {produto: 'Short verde canelado',valor: 80.0},      
      {produto: 'Salto agulha 39', valor: 250.0}, 
      {produto: 'Tênis casual preto', valor: 120.0}, 
      {produto: 'meia calça transparente', valor: 80.0}
    ]
  }
  
  let clienteLuna = {
    nome: 'Luna',
    pagamento: 'crédito 3x',
    carrinho: [
      {produto: 'Sabonetes Todo dia', valor: 30.0}, 
      {produto: 'Sabonete líquido Ekos Maracujá', valor: 49.0}, 
      {produto: 'Perfume Luna Tradicional', valor: 110.0}, 
      {produto: 'Hidratante ilía secreto', valor: 59.0}, 
      {produto: 'Refil frescor Ekos Maracujá', valor: 67.0}
    ]
  } 
  
  
  let clienteHecate = {
    nome:'Hecate',
    pagamento: 'à vista',
    carrinho: [
      {produto: 'Perfume Essencial Tradicional Fem', valor: 139.0}, 
      {produto: 'Perfume Biografia Assinatura', valor: 119.0}, 
      {produto: 'Águas de Lírio', valor: 80.0}, 
      {produto: 'Body Splash Tododia Algodão', valor: 49.0}, 
      {produto: 'Perfume Luna Intenso', valor: 169.0}, 
      {produto: 'Creme acetinado Essencial Exclusivo', valor: 69.0}, 
      {produto: 'Kit Natura mamãe bebê', valor: 49.0}, 
      {produto: 'Perfume Essencial OUD Fem', valor: 213.0}
    ]
  }
  

      


  function verificarDescontoClientes (lista) {
    let valorTotalDaCompra = 0
    let valorTotalDesconto = 0
    let valorDoProdutoComDesconto = 0
            
      for (let produto of lista) {
        if (produto.valor >= 60.0 && produto.valor < 100.0){
          valorTotalDaCompra += produto.valor
          valorTotalDesconto += produto.valor * 0.1
          valorDoProdutoComDesconto += produto.valor - valorTotalDesconto
        }
        else if (produto.valor >= 100.0 && produto.valor < 200.0){
          valorTotalDaCompra += produto.valor
          valorTotalDesconto += produto.valor * 0.2
          valorDaPecaComDesconto += produto.valor - valorTotalDesconto
        }           
        else if (produto.valor >= 200){
          valorTotalDaCompra += produto.valor
          valorTotalDesconto += produto.valor * 0.5
          valorDaPecaComDesconto += produto.valor - valorTotalDesconto
        } 
        else{
          valorTotalDaCompra += produto.valor
          valorTotalDesconto += produto.valor * 0
          valorDoProdutoComDesconto += produto.valor - valorTotalDesconto
        }          
        
      }
     
      console.log(`${valorTotalDaCompra}`)
      console.log(`${valorTotalDesconto}`)
      console.log(`${valorDoProdutoComDesconto}`)
      

      verificarDescontoClientes(clienteLilit)

  }