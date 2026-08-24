// Lógica para os botões de reação nos posts
const botoesReacao = document.querySelectorAll("article button");

botoesReacao.forEach(function(botao) {
    let curtiu = false; 

    botao.addEventListener("click", function() {
        const texto = botao.querySelector("span");
        if (!texto) return;

        let valorAtual = Number(texto.textContent);

        if (!curtiu) {
            texto.textContent = valorAtual + 1;
            curtiu = true;
        } else {
            texto.textContent = valorAtual - 1;
            curtiu = false;
        }
    });
});

// Lógica para alternar o tema escuro
const btnTema = document.querySelector(".btn-tema-escuro");

if (btnTema) {
    btnTema.addEventListener("click", function() {
        document.body.classList.toggle("tema-escuro");
    });
}
