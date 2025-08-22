const emailAssunto = document.getElementById(
   "emailAssunto"
) as HTMLInputElement | null;
const emailConteudo = document.getElementById(
   "emailConteudo"
) as HTMLInputElement | null;
const emailSubmitBtn = document.getElementById(
   "emailSubmitBtn"
) as HTMLElement | null;

let assunto: string;
let conteudo: string;

function enviarEmail() {
   if (emailAssunto) {
      assunto = emailAssunto.value;
   }
   if (emailConteudo) {
      conteudo = emailConteudo.value;
   }

   window.location.href = `mailto:gabriellemener@gmail.com?subject=${assunto} &body=${conteudo}`;
}

emailSubmitBtn.addEventListener("click", (e) => {
   e.preventDefault();
   enviarEmail();
});
