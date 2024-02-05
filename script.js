function mostrarMensagem() {
    var nome = document.getElementById("nome").value;
    var mensagemElement = document.getElementById("mensagem");

    if (nome.trim() !== "") {
        mensagemElement.innerHTML = `Olá, ${nome}! Parabéns! Você descobriu a mensagem especial!`;
        mensagemElement.style.color = "#4CAF50";
        mensagemElement.style.fontWeight = "bold";

        // Adicionando animação de fade
        mensagemElement.style.opacity = "0";
        setTimeout(function () {
            mensagemElement.style.transition = "opacity 1s";
            mensagemElement.style.opacity = "1";
        }, 100);
    } else {
        mensagemElement.innerHTML = "Por favor, insira seu nome.";
        mensagemElement.style.color = "red";
        mensagemElement.style.fontWeight = "normal";
    }
}
