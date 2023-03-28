(function(){
    let dataAtual = new Date()
    dataAtual.setHours(0)
    dataAtual.setMinutes(0)
    dataAtual.setSeconds(0)
    dataAtual.setMilliseconds(0)
    let anoAtual = dataAtual.getFullYear()

    let dataNiver = new Date(anoAtual, 4 , 05 )

    let dataAtualTS = dataAtual.getTime();
    let dataNiverTS = dataNiver.getTime();

    if(dataNiverTS  === dataAtualTS){
       alert("Parabéns, hoje é seu aniversário")
    }
    if(dataNiverTS < dataAtualTS){// se for menor siginica que meu aniversário já passou
      dataNiver.setFullYear(+anoAtual)
      dataNiverTS = dataNiver.getTime();
    } 
 
    //Formatei a const desse jeito pois isso é um padrão quando não alteramos mais a variavel 
    const UM_DIA_TS = 24 * 60 * 60 * 1000// Isso me retorna quantos milessegundos tem um dia 

    let diferenca  = dataNiverTS - dataAtualTS
    console.log(diferenca / UM_DIA_TS)
})()