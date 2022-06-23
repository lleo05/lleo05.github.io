/* ---------- Mostrar e Esconder a div - Selecionar Tamanho ---------- */
let tamanho = document.getElementById('escolherTamanho');
let isShowTamanho = false;

function escolherSelecionarTamanho() {
    if (isShowTamanho) {
        tamanho.style.display = "none";
        isShowTamanho = false;
    } else {
        tamanho.style.display = "block";
        isShowTamanho = true;
    }
}

document.getElementById('selecionar1').addEventListener('click', function () {
    escolherSelecionarTamanho()
})

/* ----- Esconder a div ao clicar fora ----- */
document.addEventListener('mouseup', function (e) {
    if (!tamanho.contains(e.target)) {
        tamanho.style.display = 'none';
    }
});


/* ---------- Mostrar e Esconder a div - Selecionar Quantidade ---------- */
let quantidade = document.getElementById('escolherQuantidade');
let isShowQuantidade = false;

function escolherSelecionarQuantidade() {
    if (isShowQuantidade) {
        quantidade.style.display = "none";
        isShowQuantidade = false;
    } else {
        quantidade.style.display = "block";
        isShowQuantidade = true;
    }
}

document.getElementById('selecionar2').addEventListener('click', function () {
    escolherSelecionarQuantidade()
})

/* ----- Esconder a div co clicar fora ----- */
document.addEventListener('mouseup', function (e) {
    if (!quantidade.contains(e.target)) {
        quantidade.style.display = 'none';
    }
});

/* ---------- Altera o Texto do Botão 'Escolher Tamanho' ---------- */
let selecionar1 = document.querySelector("#selecionar1");
let option1 = document.querySelector("#option1-tamanho");
let option2 = document.querySelector("#option2-tamanho");

option1.addEventListener("click", function () {
    selecionar1.textContent = "Pequeno";
})

option2.addEventListener("click", function () {
    selecionar1.textContent = "Grande";
})

/* ---------- Altera o Texto do Botão 'Escolher Quantidade' ---------- */
let selecionar2 = document.querySelector("#selecionar2");
let option1_Quantidade = document.querySelector("#option1-quantidade");
let option2_Quantidade = document.querySelector("#option2-quantidade");

option1_Quantidade.addEventListener("click", function () {
    selecionar2.textContent = "1";
})

option2_Quantidade.addEventListener("click", function () {
    selecionar2.textContent = "2";
})

/* ---------- Adicionar um Novo Pedido de Toalhas ---------- */
/* ----- Verifica se o botão está a funcionar ----- */
/* let adicionar = document.getElementById("adicionar");
adicionar.addEventListener("click", function (event) {
    console.log(event.target); // este é o elemento clicado
    alert('O elemento clicado esta a funcionar ');
}) */

document.getElementById('adicionar').addEventListener("click", function () {

    let fazerPedido = document.getElementById('fazer-pedido');
    let isHideButton = false;

    if (isHideButton) {
        fazerPedido.style.display = "block";
        isHideButton = false;
    } else {
        fazerPedido.style.display = "none";
        isHideButton = true;
    }

    let novoPedido = document.getElementById('novo-pedido');
    novoPedido.innerHTML = `
    <div class="container center">
        <div class="row center" id="coluna-nova">
            <div class="col-12 center">
                <img src="../_img/icon-toalhas.png" id="icon-grande" alt="icon-toalhas">
                <p>Pedir Toalhas</p>
                <div class="container" id="selecionar-tamanho">
                    <div class="row">
                        <div class="col-7 text1 fluid">
                            Tamanho:
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-outline-light" id="selecionar1">Escolher</button>
                        </div>
                    </div>

                    <hr id="linha1">

                    <div class="row">
                        <div class="col-7 text1">
                            Quanditade:
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-outline-light" id="selecionar2">Escolher</button>
                        </div>
                    </div>

                    <hr id="linha1">

                    <div id="adicionar2">
                        <button type="button" class="btn btn-outline-light" id="adicionar2">
                            <img src="../_img/icon-adicionar-branco.png" alt="icon-ligar">
                            Adicionar
                        </button>
                    </div>

                    <div id="limpar">
                        <img src="../_img/icon-cruz-branco.png" alt="icon-cancelar-novo-pedido" id="limpar">
                    </div>
                </div>

                <button type="button" class="btn btn-outline-dark" id="fazer-pedido2">Fazer Pedido</button>
            </div>

            <div id="escolherTamanho">
                <div id="background-escolher-tamanho-toalhas">
                    <p>Selecionar Tamanho</p>

                    <button type="button" class="btn btn-outline-light" id="option1-tamanho">Pequeno</button>

                    <hr id="linha3">

                    <button type="button" class="btn btn-outline-light" id="option2-tamanho">Grande</button>
                </div>
            </div>

            <div id="escolherQuantidade">
                <div id="background-escolher-quantidade-toalhas">
                    <p>Selecionar Quantidade</p>

                    <button type="button" class="btn btn-outline-light" id="option1-quantidade">1</button>

                    <hr id="linha3">

                    <button type="button" class="btn btn-outline-light" id="option2-quantidade">2</button>
                </div>
            </div>
        </div>
    </div>
        `
})

/* ---------- Esconde o Novo Pedido de Toalhas ---------- */
/* let esconder = document.getElementById('novo-pedido');
let hideNovoPedido = false;

function esconderNovoPedido() {
    if (hideNovoPedido) {
        esconder.style.display = "none";
        hideNovoPedido = false;
    } else {
        esconder.style.display = "block";
        hideNovoPedido = true;
    }
}

document.getElementById('limpar').addEventListener('click', function () {
    esconderNovoPedido()
}) */

/* Não está a ir buscar o id LIMPAR */









/* ---------- Mostrar e Esconder a div - Selecionar Quantidade ---------- */
let quantidade_papel = document.getElementById('quantidadePapel');
let isShowQuantidadePapel = false;

function quantidadePapel() {
    if (isShowQuantidadePapel) {
        quantidade_papel.style.display = "none";
        isShowQuantidadePapel = false;
    } else {
        quantidade_papel.style.display = "block";
        isShowQuantidadePapel = true;
    }
}

document.getElementById('selecionar-quantidade-papel').addEventListener('click', function () {
    quantidadePapel()
})

/* ----- Esconder a div ao clicar fora ----- */
document.addEventListener('mouseup', function (e) {
    if (!quantidade_papel.contains(e.target)) {
        quantidade_papel.style.display = 'none';
    }
});

/* ---------- Altera o Texto do Botão 'Escolher Quantidade' ---------- */
let selecionar_quantidade_papel = document.querySelector("#selecionar-quantidade-papel");
let option1_Quantidade_Papel = document.querySelector("#option1-quantidade-papel");
let option2_Quantidade_Papel = document.querySelector("#option2-quantidade-papel");

option1_Quantidade_Papel.addEventListener("click", function () {
    selecionar_quantidade_papel.textContent = "1";
})

option2_Quantidade_Papel.addEventListener("click", function () {
    selecionar_quantidade_papel.textContent = "2";
})