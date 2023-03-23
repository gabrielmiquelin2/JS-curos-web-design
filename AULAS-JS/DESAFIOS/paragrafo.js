(function(){
   window.addEventListener("load", init);

   function init(){
      let $paragrafos = document.querySelectorAll("p")
      let x = 0;
      while($paragrafos[x]){
        $paragrafos[x].innerHTML =  
        formatarTexto($paragrafos[x].innerHTML);
        x++
      }
   }

   function formatarTexto (texto){
      let numeroMaximo = 200;
      if(texto.length<= numeroMaximo) return texto;//Não usei as chaves({ }) pois a condição ocupa uma única linha

      let subTexto = texto.slice(0, numeroMaximo);
      return subTexto + "..."
   }
})()