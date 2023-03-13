let Caneta = (function(window){
  "use strict"
  console.log(this)
   function Caneta (preco, cor){
    
    let color = cor || "black"
     this.preco = preco || 1 ;
     this.mudarCor = function(cor){
      if (cor !== 'Red' && cor !== "blue"){
          return;
      }
       color = cor
     }
     this.pegarCor = function (){
      return color
     }
  }
  
 return Caneta;
})(window)