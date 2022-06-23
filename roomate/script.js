/* ---------- Service Worker ---------- */
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").then(function () {
        console.log("Service Worker is registered!");
    });
}

/* ---------- Estados do Quarto ---------- */
/* ----- Estados do Quarto ----- */
let ativarNaoEntrar = document.getElementById('ativar-nao-entrar');
let isShowNaoEntrar = false;

function escolherSelecionarTamanho() {
    if (isShowNaoEntrar) {
        ativarNaoEntrar.style.display = "none";
        isShowNaoEntrar = false;
    } else {
        ativarNaoEntrar.style.display = "block";
        isShowNaoEntrar = true;
    }
}

document.getElementById('nao-entrar').addEventListener('click', function () {
    escolherSelecionarTamanho()
})

/* ----- Esconder a div ao clicar fora ----- */
document.addEventListener('mouseup', function (e) {
    if (!ativarNaoEntrar.contains(e.target)) {
        ativarNaoEntrar.style.display = 'none';
    }
});