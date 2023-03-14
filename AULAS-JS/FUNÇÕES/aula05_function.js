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

// let x = 0;
// let y;
// function mostrarX(){
//   let x = 10;//não conflita com outras variaves q estão fora da function, MAS SE EU TIRAR O "let" O JS VAI ENTENDER QUE EU ATRIBUI UM NOVO VALOR
//   let y = 20;
//   console.log(`Mostrar x: ${x}`)
//   console.log(`Mostrar y: ${y}`)
// }

// mostrarX()
// console.log(`Mostrar x: ${x}`)
// console.log(`Mostrar y: ${y}`)

//IIFE  FUNÇÂO AUTO INVOCÁVEL
(function (){
    let isValid = false

    function somar (){
      console.log(arguments);//representa todos os valores que foram passado pelos parametros passados
      let result
      let x  = 0;
      while(arguments [x]){
        result += arguments[x]
        // result = result + arguments[x]//mesma cois do decima
        x++
        //ou
        //x = x + 1;
      }
       console.log(`result: ${result}`)   
    }
    somar([10,20,51])//passo os valores do array
})()
