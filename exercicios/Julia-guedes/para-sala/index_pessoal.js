const Paises = [
    {
        nome: "Noruega",
        idh: 0.944
    },
    {
        nome: "Qatar",
        idh: 0.850
    },
    {
        nome: "Canadá",
        idh: 0.913
    },
    {
        nome: "Brasil",
        idh: 0.755
    },
    {
        nome: "Japão",
        idh: 0.891
    }, 
    {
        nome: "Vietnã",
        idh: 0.666
    }, 
    {
        nome: "Afeganistão",
        idh: 0.465
    }, 
    {
        nome: "Camarões",
        idh: 0.512
    }
]

function classificacaoDeIDH(listaPaises){
    let objeto_pra_adicionar = new Object()

    for (let pais_atual of listaPaises){
        if (pais_atual.idh < 0.500){
            objeto_pra_adicionar[pais_atual.nome] = "O IDH deste país é considerado MUITO BAIXO!"
        }else if (0.500 <= pais_atual.idh && pais_atual.idh < 0.600){
            objeto_pra_adicionar[pais_atual.nome] = "O IDH deste país é considerado BAIXO!."
        }else if (0.600 <= pais_atual.idh && pais_atual.idh < 0.700){
            objeto_pra_adicionar[pais_atual.nome] = "O IDH deste país é considerado MÉDIO!."
        }else if (0.700 <= pais_atual.idh && pais_atual.idh < 0.800){
            objeto_pra_adicionar[pais_atual.nome] = "O IDH deste país é considerado ALTO!."
        }else if (0.800 <= pais_atual.idh && pais_atual.idh <= 1.000){
            objeto_pra_adicionar[pais_atual.nome] = "O IDH deste país é considerado MUITO ALTO."
        }
    }
    console.log(objeto_pra_adicionar)
}

classificacaoDeIDH(Paises)