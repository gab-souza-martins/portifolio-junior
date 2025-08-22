var emailAssunto = document.getElementById("emailAssunto");
var emailConteudo = document.getElementById("emailConteudo");
var emailSubmitBtn = document.getElementById("emailSubmitBtn");
var assunto;
var conteudo;
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
    enviarEmail();
});
