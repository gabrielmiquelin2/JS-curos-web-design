//EXPLICAÇÃO DO CÓDIGO
//Esse código adiciona ou remove uma classe CSS do elemento body da página, dependendo da posição do scroll vertical do navegador.
// Mais especificamente, quando o usuário rola a página para baixo mais de 100 pixels, o código adiciona a classe "fx" ao elemento body. Essa classe pode ser usada para aplicar estilos especiais à página quando ela é rolada, como adicionar um efeito de transição ou alterar a posição do menu.
// Por outro lado, quando o usuário rola a página para cima e fica com menos de 100 pixels de rolagem vertical, o código remove a classe "fx" do elemento body.
// O código usa o método window.scrollY para obter a posição vertical atual do scroll e a função hasClassFx para verificar se a classe "fx" já está presente no elemento body. Se a classe "fx" já estiver presente e o usuário rolar para cima, a classe é removida; caso contrário, se a classe ainda não estiver presente e o usuário rolar para baixo, a classe é adicionada.

(() => {
  const menu = document.querySelector(".menu");

  window.addEventListener("scroll", () => {
    const posYScroll = window.scrollY;

    if (posYScroll > 100 && !hasClassFx()) {
      document.body.classList.add("fx");
      console.log("Adicionou a classe fx");
    } else if (posYScroll <= 100 && hasClassFx()) {
      document.body.classList.remove("fx");
      console.log("Removeu a classe fx");
    }
  });

  function hasClassFx() {
    return document.body.classList.contains("fx");
  }
})();


