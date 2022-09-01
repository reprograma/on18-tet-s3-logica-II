const listaDePaises = [
    {
        nome: "noruega",
        idh: 0.944
    },
    {
        nome: "qatar",
        idh: 0.850
    },
    {
        nome: "canadá",
        idh: 0.913
    },
    {
        nome: "brasil",
        idh: 0.755
    },
    {
        nome: "noruega",
        idh: 0.891
    },
    {
        nome: "japão",
        idh: 0.666
    }, {
        nome: "vietnã",
        idh: 0.465
    },
    {
        nome: "afeganistão",
        idh: 0.944
    },
    {
        nome: "camarões",
        idh: 0.512
    },
]

const listaDePaises2 = [
    {
        nome: "china",
        idh: 0.900
    },
    {
        nome: "frança",
        idh: 0.290
    }, {
        nome: "portugal",
        idh: 0.750
    },
    {
        nome: "chile",
        idh: 0.100,
    },
    {
        nome: "inglaterra",
        idh: 0.600
    },
]

function classificarPaisesPorIdh(parametro_lista) {
    let idhpaises = {}
    for (pais of parametro_lista) {
        if (pais.idh >= 0 && pais.idh <= 0.499) {
            idhpaises[pais.nome] = 'IDH é muito baixo'
        } else if (pais.idh >= 0.5 && pais.idh <= 0.599) {
            idhpaises[pais.nome] = 'IDH é baixo'
        } else if (pais.idh >= 0.6 && pais.idh <= 0.699) {
            idhpaises[pais.nome] = 'IDH é médio'
        } else if (pais.idh >= 0.7 && pais.idh <= 0.799) {
            idhpaises[pais.nome] = 'IDH é muito alto'
        } else if (pais.idh >= 0.8 && pais.idh <= 1) {
            idhpaises[pais.nome] = 'IDH é muito muito alto'
        } else {
            idhpaises[pais.nome] = 'IDH inválido'
        }
    }
    console.table(idhpaises)
}

classificarPaisesPorIdh(listaDePaises)
console.log('-----------------------------------------')
classificarPaisesPorIdh(listaDePaises2)


// chamando um elemento especifico do array
console.log(listaDePaises[1].idh)
