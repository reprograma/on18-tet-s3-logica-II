let regiao = "sul"
//regiao = regiao.toLowerCase();

switch (regiao) {
    case "nordeste":
        console.log("Possui 9 estados");
        break;
    case ("norte"):
        console.log("Possui 7 estados");
        break;
    case ("centro-oeste"):
        console.log("Possui 3 estados e o DF");
        break;
    case "sudeste":
        console.log();
        break
    case "sul":
        console.log("Possui 3 estados");
        break
    default:
        console.log("Dado inválido");
}