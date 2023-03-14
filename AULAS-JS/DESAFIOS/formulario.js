(function(){
    'user strict';
     let $txtUser = document.getElementById("txtUser");
     let $txtPass = document.getElementById("txtPass");
     let $btn = document.getElementById("btn")

     $btn.addEventListener('click', function(){//(.addEventListener) fica monitorando quando tiver um evento de de click(pra isso q ele serve)
       

        if(!$txtUser.value === "" || !$txtPass.value ){//value para entrar dentro do button
          alert("Preencha todos os campos")
        }
         
     });



})()