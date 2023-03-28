let paragrafos = document.getElementsByTagName("p")

for(let i = 0; i < paragrafos.length; i++){
  paragrafos[i].innerHTML = 
  formatarParagrafo (paragrafos[i].innerHTML)
}

function formatarParagrafo (texto){
  let arr = texto.split(" ");//split separa a string em arrays
  console.log(arr)

  if (arr.length > 10){
     return arr.slice(0, 10).join(" ") + "..."// o slice vai me retornar uma array, dai uso o join e transforma em string
  }
  return texto;
}


