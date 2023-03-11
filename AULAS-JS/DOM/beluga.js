
  function calcularMedia (){

        let total = 0;
        let qtd = arguments.length //Para mim saber o numero de elementos da variavel media
        let x = 0;

        while(typeof arguments[x] === 'number'){
              total += arguments[x];
              x = x + 1
        }
           
        return total / qtd;
  }

