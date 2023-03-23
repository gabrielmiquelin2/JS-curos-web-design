let nome = "Gabriel Ferreira Miquelin"

let nomeFormatado = formatarNome(nome)

function formatarNome(nome){
  let posicaoUltimoEspaco = nome.lastIndexOf(" ");
  if(posicaoUltimoEspaco <=0 ){
    return nome;
  }
  let ultimoNome = nome.slice(posicaoUltimoEspaco + 1); //1 para tirar o espaçamento
  console.log("ultimoNome", ultimoNome)

  let primeiroNome = nome.slice (0,  posicaoUltimoEspaco);
  console.log("posicaoUltimoEspaco", posicaoUltimoEspaco);

  return ultimoNome + ", " + primeiroNome ;
}

console.log(nomeFormatado)