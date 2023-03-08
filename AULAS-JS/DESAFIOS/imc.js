// CRIE UMA FUNÇÂO QUE RETORNE O IMC
// CRIE OUTRA FUNÇÂO QUE RECEBA ESTE ÌNDICE  E RETORNE UMA STRING INFORMANDO SUA CLASSIFICAÇÃO

(function(){
    function calcularImc (peso, altura, callback){
       let imc = peso / (altura * altura);
       if (callback && typeof callback === 'function'){
        return callback(imc);
       }
       console.log("Não passou callback")
       return imc;
    }

    function calssificacaoImc(imc){
      if (imc <= 16.9){
        return "Muito abaixo do peso"
      }else if (imc <= 18.4){
        return "Abaixo do peso"
      }else if (imc <= 24.9){
        return "Peso normal"
      }else if(imc <= 29.9) {
        return 'acima do peso';
    } else if(imc <= 34.9){
        return 'obesidade 1';
    } else if(imc <= 40){
        return 'obesidade 2';
    } else {
        return 'obesidade 3';
    }
    }

    let peso = 65;
    let altura = 1.70;
     
    let imc = calcularImc(peso, altura)
    console.log(`Classificação IMC: ${imc}`)
})()
