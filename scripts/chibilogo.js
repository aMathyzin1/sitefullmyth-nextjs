// chibilogo.js
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com a classe "logo" na página
    var logoElement = document.querySelector('.logo');
    
    if (logoElement) {
      // Cria o elemento de imagem para o bonequinho chibi
      var chibiIcon = document.createElement('img');
      chibiIcon.src = "https://amathyzin.com/info/assets/yc1.png"; // Ajuste o caminho conforme necessário
      chibiIcon.alt = "Bonequinho Chibi";
      
      // Define estilos inline para o ícone
      chibiIcon.style.width = "30px";
      chibiIcon.style.height = "auto";
      chibiIcon.style.marginRight = "8px";
      
      // Insere o ícone antes do conteúdo existente na logo
      logoElement.insertBefore(chibiIcon, logoElement.firstChild);
    }
  });
  