(function(){
   let $btn = document.getElementsByTagName("button")

   for(let i = 0; i < $btn.length; i++){
    $btn[i].addEventListener("click",clicou)
   }

   function clicou (){
    console.log(this.textContent)
   }
})()