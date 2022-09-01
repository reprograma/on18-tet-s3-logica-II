let lilit = {
  pagamento: 'a vista',
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
    {produto: 'meia calça transparente', valor: 80.0} ]
  }

let priscila = {
  pagamento: 'pix',
  carrinho: [
    {produto: 'Cropped preto', valor: 39.9},
    {produto: 'Calça Jeans Destroyed', valor: 89.0},
    {produto: 'Jaqueta Oversized', valor: 269.0},
    {produto: 'Conjunto Brinco Estrela', valor: 50.0},
    {produto: 'Blusa algodão gola V', valor: 30.0},
    {produto: 'Tenis branco', valor: 169.0} ]
  }
let jess = {
    pagamento: 'a vista',
    carrinho: [
      {produto: 'Calça Wide Leg', valor: 89.0},
      {produto: 'Cropped branco', valor: 35.0},
      {produto: 'Jaqueta Jeans Clara', valor: 230.0},
      {produto: 'Sandália Tratorada', valor: 169.0},
      {produto: 'Vestido Tubinho Preto', valor: 89.0} ]
  }

let clientes = [lilit, priscila, jess];

function decidePromocao (cliente) {
  let total = 0;

  for (itemIndividual of cliente){
    total = total + itemIndividual.valor;
    console.log(total);
  }

  if (100>desconto && desconto >=60){
    desconto = (total - total/10)
  }else if(200>desconto && desconto >=100){
    desconto = (total - total/5)
  }else if(desconto >=200){
    desconto = (total/2)
  }

}

console.log(decidePromocao(clientes.lilit));
