//lista do cliente
let cliente = {
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

let total=0;
  //Lista de cupons
let shopcupon = {
    cupon: "vc resebeu um cupon", valor: 50
}

let descValue=0;
let descN=0;
let temCupon=new Boolean;

  //chama a função de somar os valores dos produtos
  totalValue();
  
 //função que soma o valor total bruto
function totalValue()
{
    //loop de soma dos valores dos produtos antes de aplicar os descontos
    for(  let buy of cliente.carrinho)
    {
        total+=buy.valor;
    }
    console.log(total);
    //chama a função de calcular descontos
    desconto();
}
//calcula os descontos
function desconto()
{
    if(total>=60 && total < 100){
        descValue=(total*.1);
        descN=10;
    }
    if(total>=100 && total < 200){
        descValue=(total*.2);
        descN=20;
    }
    if(total>=200){
        descValue=(total*.5);
        descN=50;
    }
    if(cliente.pagamento=="pix"||cliente.pagamento=="vista"){
        descValue-=(total*.05);
        descN=descN+5;
    }
    console.log(descValue);
    if(descValue>=800||cliente.carrinho.length>=10){
        console.log(shopcupon);
        temCupon=true;
    }

    //chama a função de desenho
    draw();
}
//desenha no console o resultado
function draw(){
    console.log("--------------------------------------------");
    console.log("Suas compras");
    console.log("--------------------------------------------");
    for(let itens of cliente.carrinho){
        console.log(itens);
    }
    console.log(cliente.carrinho[0]);
    console.log("--------------------------------------------");
    console.log("Valor total");
    console.log("R$"+total);
    console.log("desconto de "+descN+"%");
    console.log("--------------------------------------------");
    console.log("Valor com desconto");
    console.log("R$ "+descValue);
    if(temCupon==true){
        console.log(shopcupon.cupon+" no valor de R$"+shopcupon.valor);
    }
    console.log("--------------------------------------------");
}