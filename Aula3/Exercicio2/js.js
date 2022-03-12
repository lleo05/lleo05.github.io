/* function validar() {
    let nome = formulario.nome;

    if (nome.value == " ") {
        alert("Valor inválido! Deve introduzir os valores corretamente em todos os campos.")

        nome.focus();
    } else {
        console.log("Todos o campos introduzidos estão corretos!")
    }
} */

/* Função Validar */
function validar(event) {
    event.preventDefault()
    // pegando o valor do nome pelos names
    let nome = document.getElementById("inputName");
    let apelido = document.getElementById("inputName2");
    let email = document.getElementById("inputEmail");
    let morada = document.getElementById("inputMorada");
    let telemovel = document.getElementById("inputNumber");
    let nif = document.getElementById("inputNIF");

    // verificar se o nome está vazio
    if (nome.value == "") {
        alert("Nome não informado");

        // Deixa o input com o focus
        nome.focus();
        // retorna a função e não olha as outras linhas
        return;
    }
    if (apelido.value == "") {
        alert("Apelido não informado");
        apelido.focus();
        return;
    }
    if (email.value == "") {
        alert("E-mail não informado");
        email.focus();
        return;
    }
    if (morada.value == "") {
        alert("Morada não informada");
        morada.focus();
        return;
    }
    if (telemovel.value == "") {
        alert("Telemóvel não informado");
        telemovel.focus();
        return;
    }
    if (nif.value == "") {
        alert("NIF não informado");
        nif.focus();
        return;
    }
    console.log("Todos os campos introduzidos corretamente!");
    // envia o formulário
    //formulario.submit();

    document.getElementById('inputName').value = '';
    document.getElementById('inputName2').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputMorada').value = '';
    document.getElementById('inputNumber').value = '';
    document.getElementById('inputNIF').value = '';
}