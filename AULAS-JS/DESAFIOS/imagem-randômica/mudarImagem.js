function calcularMedia(){                    
                    
   var total = 0;
   var qtd = arguments.length;
   var x = 0;
   //while(arguments[x]){
   while(typeof arguments[x] === 'number'){
       total += arguments[x];
       x++
   }                    

   return (total / qtd).toFixed(2);
}

function sortear(n){
   var _n = n || 1;
   var nSorteado = Math.random();
   nSorteado = nSorteado * _n;
   nSorteado = Math.floor(nSorteado);
   return nSorteado;
}

(function(){
   window.addEventListener("load", init);

   function init (){
      let n = sortear (5) + 1;

      document.querySelector('body').style.backgroundImage = "url(images/"+  n +".jpg)";
   }
})()