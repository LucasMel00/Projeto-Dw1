document.addEventListener("DOMContentLoaded", function () {
    const modoClaroBotao = document.querySelector("#modo-claro-botao");
    const body = document.body;

    modoClaroBotao.addEventListener("click", function () {
        body.classList.toggle("modo-claro");
        body.classList.toggle("modo-escuro");
    });
});