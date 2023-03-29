//Criar uma função que retorne uma data formatada no padrao brasileiro : dd/mm/aaaa

(function(){
    let data = new Date()
 
    function formatarData(data){

      let dia = data.getDate() < 10 ? "0" + data.getDate() :data.getDate();

      let mes = data.getMonth() + 1;
      mes  = mes < 10 ? "0" + mes : mes

      return dia + "/" + mes + "/" + data.getFullYear();
    }

    console.log(formatarData(data))
})()