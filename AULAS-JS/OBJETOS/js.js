let hoje = new Date()

let x = [0]

function mudarArr (x){
  let y = x
  y.push(2);
  x.push(3);

}

mudarArr(x);
console.log("-------")

let n = 0 
function mudarN(n){
   let n2 = n;
   console.log(++ n2);//somei mais um em ne

}
mudarN;
console.log(n)

console.log("-------------------");


 function mudaCor (cor){
    console.log(this);
    this.cor = cor;
 }

let caneta1 = {
  cor: "red",
  mudarCor: function(cor){
   mudaCor: mudaCor
  }
}

let caneta2 = {
  cor: "orange",
  mudarCor: function(cor){
    mudaCor: mudaCor
  }
}

caneta1.mudarCor("blue");
console.log(caneta1)

console.log(caneta2)


let caneta3 = new Caneta ()