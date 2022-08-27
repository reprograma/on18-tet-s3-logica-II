let regiao = 'centro-oeste'

switch (regiao.toLowerCase()) {
    case 'nordeste':
        console.log('possui 9 estados');
        break;
    case 'norte':
        console.log('possui 7 estados');
        break;
    case 'centro-oeste':
        console.log('possui 3 estados e DF');
        break;
    case 'sudeste':
        console.log('possui 4 estados');
        break;
    case 'sul':
        console.log('possui 3 estados');
        break;
    default:
        console.log('estado inválido')
}

