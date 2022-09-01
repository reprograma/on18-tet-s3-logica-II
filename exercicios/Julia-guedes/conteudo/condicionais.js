let regiao;

switch(regiao) {
    case "Nordeste":
        console.log("Possui 9 estados")
        break
    case "Norte":
        console.log("Possui 7 estados")
        break
    case "Sudeste":
        console.log("Possui 4 estados")
        break
        case "Centro-Oeste":
        console.log("Possui 3 estados")
        break
    case "Sul":
        console.log("Possui 3 estados")
         break
    default:
        console.log("Dado inválido")
}

switch (horario >= 0 && horario < 6) {
    case true:
      console.log("madrugada");
      break;
    case false:
      switch (horario >= 6 && horario < 12) {
        case true:
          console.log("manhã");
          break;
        case false:
          switch (horario >= 12 && horario < 18) {
            case true:
              console.log("tarde");
              break;
            case false:
              switch (horario > 18 && horario < 24) {
                case true:
                  console.log("noite");
                case false:
                  console.log("horário inválido");
              }
          }
      }
  }