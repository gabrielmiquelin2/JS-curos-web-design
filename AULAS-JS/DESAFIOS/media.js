(function(){//criei um function anonima para as variaveis não ficar no scopo Global, ou seja fora da fucntion calcularMedia
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
      let media1 = calcularMedia(2,3);
      let media2 = calcularMedia(60, 54, 94)

      console.log(`Média: ${media1}`)
      console.log(`Média: ${media2}`)
})()
