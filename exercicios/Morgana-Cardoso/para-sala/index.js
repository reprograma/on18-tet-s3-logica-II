function classificarIdhPaises(lista){
    for(let pais of lista) {
     if(pais.idh >=  0 && pais.idh < 0.5) {
        console.log('IDH é muito baixo')
      } else if (pais.idh >= 0.5 && pais.idh< 0.6) {
        console.log('IDH é baixo')
      } else if (pais.idh >= 0.6 && pais.idh < 0.7) {
        console.log('IDH é médio')
      } else if (pais.idh >= 0.7 && pais.idh< 0.8) {
        console.log('IDH é alto')
      } else if (pais.idh >= 0.8 && pais.idh <= 1) {
        console.log('IDH é muito alto')
      } else {
        console.log('IDH inválido')
      }
    }
}
  