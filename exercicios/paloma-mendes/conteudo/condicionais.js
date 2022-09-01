//Estrutura SWITCH
//break; é utilizado para parar o código naquela linha, caso satisfaça a verificação
//toLocaleLowerCase() é utilizado para que aceite a palavra independente de ter sido passado como minuscula ou maiuscula

let regiao = "Sul";

switch(regiao.toLocaleLowerCase()) {
    case 'nordeste':
        console.log('Possui 9 estados');
        break;
    case 'norte':
        console.log('Possui 7 estados');
        break;
    case 'centro-oeste':
        console.log('Possui 3 estados e o DF');
        break;
    case 'sudeste':
        console.log('Possui 4 estados');
        break;
    case 'sul':
        console.log('Possui 3 estados');
        break;
    default:
        console.log("Região inválida")
}