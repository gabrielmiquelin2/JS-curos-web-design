//São códigos javascript que quero executar depois de um certo tempo 

let n = 0

function somaUm(){
  console.log("n", ++n)

  if(n >= 10){
    clearInterval(intervalo)
  }
}

setTimeout(somaUm,1000)//depois de mil milisegundos (1 segundo) ele executo o código
  //lenbrando que ele só ente em MILISEGUNDOS
let intervalo = setInterval(somaUm,1000)

console.log(intervalo)

let str = ""
let timeoutTeste = setTimeout(function(){
   for (let i = 0; i <10000; i++){
    str += "i :" + i + " -- ";
   }
},3000)