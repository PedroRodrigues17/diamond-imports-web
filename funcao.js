

const NUMERO_WHATSAPP = "558398018453";

function comprar(produto) {
    const mensagem = `Olá! Tenho interesse no ${produto} da Diamond Imports.`;
    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-buy[data-produto]").forEach(function (botao) {
        botao.addEventListener("click", function () {
            comprar(this.dataset.produto);
        });
    });
});
