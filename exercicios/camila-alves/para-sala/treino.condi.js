

let região = "nordeste"

switch(região.toLowerCase()) {
    case "nordeste":
        console.log("possui 9 estados");
        break; 
    case "norte":
        console.log("posssui 7 estados");
        break;
    case "centro-oeste":
        console.log("possui 3 estados");
        break;
    case "sudeste":
        console.log("possui 4 estados ");
        break;
    case "sul":
        console.log("possui 3 estados");
        break;
    default: 
        console.log("Dado inválido")
}