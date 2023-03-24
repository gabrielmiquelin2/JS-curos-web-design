
  function calcularMedia (){

        let total = 0;
        let qtd = arguments.length //Para mim saber o numero de elementos da variavel media
        let x = 0;

        while(typeof arguments[x] === 'number'){
              total += arguments[x];
              x = x + 1
        }
           
        return (total / qtd).toFixed(2);
  }

function sortear (n){
      let _n = n  || 1;
      let nSorteado = Math.random();
      nSorteado = nSorteado * n;
      nSorteado = Math.floor(nSorteado)//Para arredondar o número
      return nSorteado
}