var emailAssunto = document.getElementById("emailAssunto");
var emailConteudo = document.getElementById("emailConteudo");
var emailSubmitBtn = document.getElementById("emailSubmitBtn");
var assuntoAviso = document.getElementById("assuntoAviso");
var conteudoAviso = document.getElementById("conteudoAviso");
var assunto;
var conteudo;
var inputsValidos = false;
function validarInputs() {
    if (emailAssunto.value === "") {
        emailAssunto.classList.add("border-danger");
        emailAssunto.classList.add("focus-ring");
        emailAssunto.classList.add("focus-ring-danger");
        assuntoAviso.classList.remove("d-none");
    }
    else {
        emailAssunto.classList.remove("border-danger");
        emailAssunto.classList.remove("focus-ring");
        emailAssunto.classList.remove("focus-ring-danger");
        assuntoAviso.classList.add("d-none");
    }
    if (emailConteudo.value === "") {
        emailConteudo.classList.add("border-danger");
        emailConteudo.classList.add("focus-ring");
        emailConteudo.classList.add("focus-ring-danger");
        conteudoAviso.classList.remove("d-none");
    }
    else {
        emailConteudo.classList.remove("border-danger");
        emailConteudo.classList.remove("focus-ring");
        emailConteudo.classList.remove("focus-ring-danger");
        conteudoAviso.classList.add("d-none");
    }
    if (emailAssunto.value !== "" && emailConteudo.value !== "") {
        inputsValidos = true;
    }
}
function enviarEmail() {
    if (emailAssunto) {
        assunto = emailAssunto.value;
    }
    if (emailConteudo) {
        conteudo = emailConteudo.value;
    }
    window.location.href = "mailto:gabriellemener@gmail.com?subject=".concat(assunto, " &body=").concat(conteudo);
}
emailSubmitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    validarInputs();
    if (inputsValidos) {
        enviarEmail();
    }
});
