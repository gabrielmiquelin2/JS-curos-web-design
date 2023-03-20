(function(){
  "use srict";

  let $ul = document.querySelector('ul');
  let $lis = $ul.querySelectorAll("li");
  let $txtTask = document.querySelector('#txtTask');
  let $btn = document.querySelector('#btn');

  $btn.addEventListener('click', addTask);
  $txtTask.addEventListener("keyup", function(e){
     if(e.keyCode === 13){//"keyCode, mostra o código númerico da tecla quando pressionado"
     addTask();//essa função criada permite que quando o usario, pressione a tecla "enter" ele consegue add um novo item na list, ao invés de fazer somente com o mouse

    }
  });

$ul.addEventListener ('click', function(e){
   if (e.target.nodeName === "LI"){
    removeTask(e.target);
   
   }
})

//Caso o usuário queira remover algum item da LISTA
function removeTask(li){
  if (confirm("Deseja realmente excluir a tarefa \n"+ li.textContent +"?")){//para aparecer o nome da tarefa que o user vai excluir
    console.log(li.parentNode);
    li.parentNode.removeChild(li);
  }
}

  function toogleDone(li){
     li.classList.toggle("done");
  }

  function addTask(){
   let li = document.createElement("li");
   let text = document.createTextNode($txtTask.value)

   li.appendChild(text);

   $ul.appendChild(li);//LI está visivel na página 

   $txtTask.value = "";
   $txtTask.focus();//Quando add uma nova lista, o cursor do mouse já vai para o button para add mais uma

  }
   
})()
 






