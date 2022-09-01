let regiao = "sul";

switch (regiao.toLowerCase()) {
    case 'nordeste':
        console.log('possui 9 estados');
        break;
    case 'norte':
            console.log('possui 7 estados');
        break;
    case 'centro-oeste':
            console.log('possui 3 estados e o DF');
        break;
    case 'sudeste':
            console.log('possui 4 estados');
        break;
    case 'sul':
            console.log('possui 3 estados');
        break;
    default:
            console.log('Região inválida')
        
}

// switch (horario >= 0 && horario < 6) {
//     case true:
//       console.log("madrugada");
//       break;
//     case false:
//       switch (horario >= 6 && horario < 12) {
//         case true:
//           console.log("manhã");
//           break;
//         case false:
//           switch (horario >= 12 && horario < 18) {
//             case true:
//               console.log("tarde");
//               break;
//             case false:
//               switch (horario > 18 && horario < 24) {
//                 case true:
//                   console.log("noite");
//                 case false:
//                   console.log("horário inválido");
//               }
//           }
//       }
//   }
  