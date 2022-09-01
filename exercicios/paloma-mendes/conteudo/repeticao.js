// ESTRTURA FOR
// for (expressaoInicial; condicao; incremento) {
//   codigo aqui;   
// }

/* for(let i = 0; i <= 10; i++) {
    console.log(`Número ${i}`);
}
 */
//ESTRUTURA ARRAY
// Usar colchetes é array = que é uma lista de dados/ pode ser qualquer tipo de dado
// indice - i = posição que o dado está na lista, sempre se iniciando pelo 0
//let alunas = ["Natália", "Meujaela", "Gabriele"];
let numeros = [3, 2, 4 ,3, 5, 1, 3, 4 , 2, 8, 3];
//encontrando um dado pelo indice
/* console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2]) */

//length é utilizado para per correr todos os dados da estrutura
//intera é pecorrer
/* console.log("length é", numeros.length)
//for percorrendo um array
for(let i = 0; i < numeros.concat.length; i++) {
    const dobro = numeros[i] * 2
    console.log(dobro)
} */

// ESTRUTURA WHILE
// while (condicao) {
//    codigo aqui;
// }
// while percorrendo um array
/* let i = 0
while (i < numeros.length) {
    const dobro = numeros[i] * 2
    console.log(dobro)
    i++
}
 */
// ESRTUTURA FOR/OF (Especifico para percorrer um array e somente para array)
/* for (variavel of iteravel){
    declaração
} */

for (let numero of numeros){
    const dobro = numero * 2;
    console.log(dobro)
}