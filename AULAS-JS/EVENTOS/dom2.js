let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

btn2.onclick = "clicar"

function clicar (){
   alert("clicou");

   return function(){
    alert("clicou 2")
   }
}

btn3.addEventListener("click", function(){
  alert("clicou com o DOM level 2")
})

btn3.addEventListener("click", function(){
  alert("clicou com o DOM level 2, com outro evento")
});

btn3.onclick = function (){
  alert("Olá")
}

btn3.onclick = function(){
  alert("mundo");
}

let $d1 = document.querySelector("#d1");
let $d1span = document.querySelector("#d1 span")

$d1.addEventListener("click", function(e){
  console.log("click no $d1");
  e.stopPropagation();//para a propagação de evento
});

$d1Span.addEventListener("click", function(){
  console.log("click no $d1Span");
});

document.addEventListener("click", function(evt){
  console.log("Clicou no documento")
  console.log(evt.currentTarget)//elemento a qual foi atrelado o evento
},)

let $ul = document.querySelector('ul') //acessando a ul do html
let $lis = document.querySelectorAll('li');

// let x = 0
// while($lis[x]){
//   $lis[x].addEventListener('click', function(){
//     e.stopPropagation();
//     console.log("clicou na li");
//   })
//   x++;
// }

$ul.addEventListener('click,', function(e){
    e.stopPropagation();
   console.log(this)
   console.log(e.currentTarget)
   console.log(e.target)

   if (e.target.nodeName === "LI"){
    alert("Clicou na li")
   }
})