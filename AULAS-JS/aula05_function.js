// //função anonima ou seja não tém nome
// let teste = function (str){ e
//      str()
// };
// teste(function(){
//       console.log('função passada por parametro')
// })

// /////////////////////////////////////////////////////////////////////

// let sla = function(pq){
//    pq();
// };
// sla (function(){
//        console.log("Testando")
// })

// /////////////////////////////////////////////////////////////////////

// //Maneira Mais comum
// let n1 = 20
// let n2 = 10
// function somar (n1, n2 ){
//       return n1 + n2;
// }

// let soma = somar(n1,n2)
// console.log(`Resultado ${soma}`)

// somar.teste = "Propriedade da função"
// console.log(somar.teste)

//////////////////////////////////////////////////////////////////////////////

let x = 0;
function mostrarX(){
  let x = 10;//não conflita com outras variaves q estão fora da function, MAS SE EU TIRAR O "let" O JS VAI ENTENDER QUE EU ATRIBUI UM NOVO VALOR
  console.log(`Mostrar x: ${x}`)
}

mostrarX()
console.log(`Mostrar x: ${x}`)