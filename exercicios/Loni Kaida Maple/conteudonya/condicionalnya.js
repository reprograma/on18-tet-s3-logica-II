let regiao;
let horario;

regiao = "Piroca";
regiao = regiao.toLowerCase();
switch (regiao) {
    case "nordeste":
        console.log("possui 9 estadosnya");
        break;

    case "norte":
        console.log("possui 7 estadosnya");
        break;
    
    case "centro oeste":
        console.log("possui 3 estados e o DF-nya");
        break;

    case "sudeste":
        console.log("possui 4 estadonya");
        break;

    case "sul":
        console.log("possui 3 estadonya");
        break;
        

    default:
        console.log(regiao+" Nya?");
        break;
}

/*switch (horario>=0 && horario<6) {
    case true:
        console.log("madrugada");
        break;

    case false:
        switch (horario>=6 && horario<12) {
            case true:
                console.log("manhã");
                break;
        
            case false:
                switch (horario>=12 && horario<18) {
                    case true:
                        console.log("tarde");
                        break;
                
                    case false:
                        break;
                }
        }
}
*/
