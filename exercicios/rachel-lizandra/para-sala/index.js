
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
    nome: "japão",
    idh: 0.891
  },
  { 
    nome: "vietnã",
    idh: 0.666
  },
  { 
    nome: "afeganistão",
    idh: 0.465
  },
  { 
    nome: "camarões",
    idh: 0.512
  }
]

const listaDePaises2 = [
  { 
    nome: "frança",
    idh: 0.555
  },
  { 
    nome: "alemanha",
    idh: 0.786
  },
]

// console.log(listaDePaises[2].idh)

let frutas = ['banana', 'umbu', 'laranja']
console.table

function classificarIdhPaises(lista) {
  let idhPaises = {}
  for(let pais of lista) {
    if (pais.idh >= 0 && pais.idh <= 0.5){
      idhPaises[pais.nome] = 'IDH muito baixo'
    }else if(pais.idh >= 0.5 && pais.idh <= 0.6){
      idhPaises[pais.nome] = 'IDH baixo'
    }else if(pais.idh>= 0.6 && pais.idh <= 0.7){
      idhPaises[pais.nome] = 'IDH médio'
    }else if (pais.idh >= 0.7 && pais.idh <= 0.8){
      idhPaises[pais.nome] = 'IDH alto'
    }else if(pais.idh >= 0.8 && pais.idh <= 1){
      idhPaises[pais.nome] = 'IDH muito alto'
    }else{
      idhPaises[pais.nome] = 'IDH inválido'
    }
    }
  console.table(idhPaises)
}

classificarIdhPaises(listaDePaises);
console.log('---------------------------');
classificarIdhPaises(listaDePaises2);



//saída de dados
/*
const idhPaises = {
  noruega: "classifiaçãp",
  qatar: "classifiaçãp",
  canada: "classifiaçãp",
  brasil: "classifiaçãp",
  japao: "classifiaçãp",
  vietna: "classifiaçãp",
  afeganistao: "classifiaçãp",
  camaroes: "classifiaçãp"
}
*/
