 // Usamos querySelectorAll para capturar TODOS os botões
        const botoes = document.querySelectorAll("button");

        // Percorremos a lista de botões
        botoes.forEach(function(botao) {
            let curtiu = false;
            botao.addEventListener("click", function() {
                console.log("fui clicado");
                let texto = botao.querySelector("span");
                if (curtiu === false) {
                    texto.textContent++;
                    curtiu = true;
                } else{
                    texto.textContent --;
                    curtiu = false;
                }
            });
        });
