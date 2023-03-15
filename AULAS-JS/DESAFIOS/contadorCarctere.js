(function(){
    "use strict";
    
    let $txtMsg = document.getElementById("msg");
    let $restaContainer = document.getElementById("restaContainer")
    let $resta = document.getElementById("resta");

    let maxima = $txtMsg.maxLength;

     function mostrarContainerResta (){
      $restaContainer.style.display = "block";
     }

     mostrarContainerResta() ;
     mostrarCaracteresRestantes(maxima);
     $txtMsg.addEventListener("input",checkLength);


    function checkLength(e){
       
       let numeroLetrasDigitadas = this.value.length //this.value é o texto que tá la dentro e o length é pra mim saber quantos carateres tem.
       let caracteresRestantes =  parseInt(maxima) - parseFloat(numeroLetrasDigitadas);
       mostrarCaracteresRestantes(caracteresRestantes);
    }

    function mostrarCaracteresRestantes(n){
        $resta.textContent = n;
    }
})()
