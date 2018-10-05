// buscando aluno pelo id
const aluno = document.querySelector("#primeiro-da-lista");
console.log(aluno);
// buscar o valo da primeira nota do primeiro aluno
const tdPrimeiraNota = aluno.querySelector(".info-notaum");
const primeiraNota = tdPrimeiraNota.textContent;
console.log(primeiraNota);
// buscando o segundo valor
const tdSegundaNota = aluno.querySelector(".info-notadois");
conts segundaNota = tdSegundaNota.textContent;
console.log(segundaNota);
// gerar media
const mediaFinal = aluno.querySelector(".info-media");
const mediaCalculada = (parseFloat (primeiraNota) + parseFloat (segundaNota)) / 2;
mediaFinal.textContent = mediaCalculada;