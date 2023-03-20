(function(){
   "use srict";

   let $ul = document.querySelector('ul');
   let $txtTask = document.querySelector('#txtTask');
   let $btn = document.querySelector('#btn');

   $btn.addEventListener('click',function(){
     let task = '<li>' + $txtTask.value + '</li>';
     
   $ul.innerHTML += task; //acrecenta novos itens a lista de tarefas

   $txtTask.value = "";
   $txtTask.focus();//Quando add uma nova lista, o cursor do mouse já vai para o button para add mais uma
   })



})()

