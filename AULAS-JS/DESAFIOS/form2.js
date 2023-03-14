(function(){
    'user strict';
    let $form = document.querySelector("form")
     let $txtUser = document.getElementById("txtUser");
     let $txtPass = document.getElementById("txtPass");
     let $btn = document.getElementById("btn")

     $form.addEventListener('submit', function(){//(.addEventListener) fica monitorando quando tiver um evento de de click(pra isso q ele serve)
          if(!$txtUser.value === "" || !$txtPass.value ){//value para entrar dentro do button
            alert("Preencha todos os campos")
            e.preventDefaul();//Previni o comportamento padrão, qual é o comportamento padra?ENVIAR O FORMULÁRIO
          }     
     });


})()