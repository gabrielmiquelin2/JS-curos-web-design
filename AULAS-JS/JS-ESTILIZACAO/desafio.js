(function(){
   window.addEventListener("scroll", destacaMenu);

    let $menu = document.querySelector(".nav")
    let $links = $menu.querySelectorAll("li a")//all para quando quero selecionar varios itens, nesse caso vairas LIs

   function destacaMenu(){
       let positions = [];
       for(let i = 0; i < $links.length; i++){
        positions[i] = pegaYPosicaoScroll($links[i])
       }
       console.log(positions)

       let linkAtual = pegaUltimoLinkVisivel (positions);

       let linkActived =  $menu.querySelector("actived");
       if(linkActived) linkActived.classList.remove("actived")

       linkAtual.classList.add("actived")
   }

   function pegaYPosicaoScroll(link){
    let alvo = document.querySelector(link.getAttribute ("href"));
    let positionYViewport = alvo.getBoundingClientRect().top
    return positionYViewport
   }
 
    function pegaUltimoLinkVisivel(positions){
        let quantidade  = positions.length;
        while(quantidade){
          quantidade--;
          if (positions[quantidade] < innerHeight / 2){ //innerHeight = largura disponível
             return $links [quantidade]
           }
        }
        return $links[0]
    }

     destacaMenu()
     
})()