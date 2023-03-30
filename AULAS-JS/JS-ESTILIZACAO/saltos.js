// Define uma função chamada testeSaltos
function testeSaltos() {
  // Inicia um loop for que percorre os números de 0 a 9
  for (let i = 0; i < 10; i++) {
    // Se o valor atual de i for igual a 5, continue para a próxima iteração do loop
    if (i === 5) {
      continue;
      // Se quiséssemos interromper completamente o loop, poderíamos usar a instrução break em vez de continue
    }
    // Imprime o valor atual de i no console
    console.log(i);
  }
  // Imprime a mensagem "fim do loop" no console após o loop ter sido concluído
  console.log("fim do loop");
  // Retorna a string "fim da função" quando a função é concluída
  return "fim da função";
}

// Chama a função testeSaltos e armazena o valor de retorno em uma variável chamada teste
let teste = testeSaltos();
// Imprime o valor da variável teste no console
console.log(teste);

// Define uma variável chamada n com o valor 10
let n = 10;

// Inicia uma instrução switch com a variável n como entrada
switch (n) {
  // Se n for igual a 0, imprime "switch 0" no console e sai da instrução switch
  case 0:
    console.log("switch 0");
    break;
  // Se n for igual a 10, imprime "switch 10" no console e sai da instrução switch
  case 10:
    console.log("switch 10");
    break;
  // Se n for igual a 20, imprime "switch 20" no console e sai da instrução switch
  case 20:
    console.log("switch 20");
    break;
  // Se n for igual a 30, imprime "switch 30" no console e sai da instrução switch
  case 30:
    console.log("switch 30");
    break;
  // Se n não for igual a nenhum dos valores acima, imprime "switch default" no console e sai da instrução switch
  default:
    console.log("switch default");
}
