// script-ofusca.js
(function() {
    // Função para ofuscar o conteúdo da página
    function ofuscarConteudo() {
        // Seleciona todos os elementos do corpo da página
        const elementos = document.body.getElementsByTagName('*');

        // Itera sobre os elementos e ofusca o conteúdo
        for (let elemento of elementos) {
            if (elemento.childNodes.length > 0) {
                for (let node of elemento.childNodes) {
                    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
                        // Ofusca o texto substituindo caracteres por outros
                        node.textContent = node.textContent.split('').map(function(c) {
                            return String.fromCharCode(c.charCodeAt(0) + 1);
                        }).join('');
                    }
                }
            }
        }
    }

    // Executa a função de ofuscação quando a página carrega
    window.onload = ofuscarConteudo;
})();