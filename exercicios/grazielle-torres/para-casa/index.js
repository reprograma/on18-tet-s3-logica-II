let clienteLilit = {
    nome: 'Lilit',
    pagamento: 'pix',
    carrinho: [
        { produto: 'Bolsa pequena', valor: 49.0 },
        { produto: 'Cinto preto', valor: 62.0 },
        { produto: 'Jaqueta Jeans', valor: 350.0 },
        { produto: 'Calça preta', valor: 290.0 },
        { produto: 'Blusa simples', valor: 35.0 },
        { produto: 'Calça jeans clara', valor: 130.0 },
        { produto: 'Blusa preta gola alta', valor: 60.0 },
        { produto: 'Short verde canelado', valor: 80.0 },
        { produto: 'Salto agulha 39', valor: 250.0 },
        { produto: 'Tênis casual preto', valor: 120.0 },
        { produto: 'meia calça transparente', valor: 80.0 }
    ]
}

let clienteLuciana = {
    nome: 'Luciana',
    pagamento: 'parcelado',
    carrinho: [
        { produto: 'Jaqueta Jeans', valor: 350.0 },
        { produto: 'Calça preta', valor: 290.0 },
        { produto: 'Calça jeans clara', valor: 130.0 },
        { produto: 'Salto agulha 39', valor: 250.0 },
        { produto: 'Tênis casual preto', valor: 120.0 },
    ]
}

let clienteBrizza = {
    nome: 'Brizza',
    pagamento: 'à vista',
    carrinho: [
        { produto: 'Jaqueta Jeans', valor: 350.0 },
        { produto: 'Salto agulha 39', valor: 250.0 },
    ]
}

function carrinhodeCompras(cliente) {
    let valorTotalsemDesconto = 0;
    let valorTotaldeDesconto = 0;
    let valorposDesconto = 0;
    let valordoDesconto = 0;
    let valorFinalcomDesconto = 0;
    let desconto = 0;
    let valordoDescontopix = 0;

    console.log(`Cliente: ${cliente.nome}`);
    const date = new Date().toLocaleString();
    console.log(`Compra realizada em: ${date}`);

    for (let item of cliente.carrinho) {
        if (item.valor >= 60 && item.valor < 100) {
            valordoDesconto = item.valor * 10 / 100;
            valorposDesconto = item.valor - valordoDesconto;
            desconto = 'Você ganhou 10% de desconto!'
        } else if (item.valor >= 100 && item.valor < 200) {
            valordoDesconto = item.valor * 20 / 100;
            valorposDesconto = item.valor - valordoDesconto;
            desconto = 'Você ganhou 20% de desconto!'
        } else if (item.valor >= 200) {
            valordoDesconto = item.valor * 50 / 100;
            valorposDesconto = item.valor - valordoDesconto;
            desconto = 'Você ganhou 50% de desconto!'
        } else {
            valordoDesconto = 0;
            valorposDesconto = item.valor;
            desconto = 'Você não recebeu desconto nesta peça!'
        }

        valorTotalsemDesconto = valorTotalsemDesconto + item.valor;//1506
        valorTotaldeDesconto = valorTotaldeDesconto + valordoDesconto;//523.26
        valorFinalcomDesconto = valorTotalsemDesconto - valorTotaldeDesconto;//982,80

        console.log(`Peça: ${item.produto}. ${desconto} O valor final da peça é: ${valorposDesconto}. `);

        if (cliente.pagamento == 'pix' || cliente.pagamento == 'à vista') {
            valordoDescontopix = valorFinalcomDesconto * 5 / 100;
            mensagem = 'Desconto extra de 5% aplicado!';
            valorFinal = (valorFinalcomDesconto - valordoDescontopix).toFixed(2);
        } else {
            mensagem = 'Desconto extra não aplicável!';
            valorFinal = valorFinalcomDesconto.toFixed(2);
        }
    }
    console.log(`${mensagem} O valor total a pagar é de R$ ${valorFinal}.`);
    if (cliente.carrinho.length > 10 || valorFinal > 800) {
        console.log('Parabéns! Você recebeu um cupom de R$ 50 para utilizar em sua próxima compra.');
    }
}

carrinhodeCompras(clienteLilit);
// carrinhodeCompras(clienteBrizza);
// carrinhodeCompras(clienteLuciana);
