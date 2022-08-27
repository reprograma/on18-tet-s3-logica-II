/* Escala do IDH

muitoBaixo 0 - 0.499
baixo .5 - 0.599
medio 0.6 - 0.699
alto .7 - .799
muitoAlto 0.8 - 1
*/

const listaPaises = [
    {
        nome: 'Noruega',
        idh: 0.944
    },
    {
        nome: 'Qatar',
        idh: 0.85
    },
    {
        nome: 'Canada',
        idh: 0.913
    },
    {
        nome: 'Brasil',
        idh: 0.755
    },
    {
        nome: 'Japão',
        idh: 0.891
    },
    {
        nome: 'Vietna',
        idh: 0.666
    },
    {
        nome: 'Afeganistao',
        idh: 0.465
    },
    {
        nome: 'Camaroes',
        idh: 0.512
    },
];

const idhChecker = (idh) => {
  if (idh >= 0 || idh <= 1) {
    if (idh < 0.5) {
      return "Muito Baixo";
    } else if (idh < 0.6) {
      return "Baixo";
    } else if (idh < 0.7) {
      return "Médio";
    } else if (idh < 0.8) {
      return "Alto";
    } else {
      return "Muito Alto";
    }
  } else {
    return "IDH Inválido"
  }
};

listaPaises.forEach((value, idx) => {
    listaPaises[idx].idhClassificacao = idhChecker(value.idh)
})

console.log("\nOs resultados são : \n");
console.table(listaPaises)
