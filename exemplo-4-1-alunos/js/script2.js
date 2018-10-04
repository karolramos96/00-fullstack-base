const todosOsAlunos = document.querySelectorAll ('.aluno');
//console.log(todosOsAlunos);

//const todasAsAlunas =["ana","nat","den"];
//console.log(todasAsAlunas);

//for (let indice =0; indice < todosOsAlunos.length; indice ++) 
for (let i = 0; i < todosOsAlunos.length; i ++){
  const aluno = todosOsAlunos[i];
// buscar o valo da primeira nota do primeiro aluno
const tdPrimeiraNota = aluno.querySelector(".info-notaum");
const primeiraNota = tdPrimeiraNota.textContent;
console.log(primeiraNota);
// buscando o segundo valor
const tdSegundaNota = aluno.querySelector(".info-notadois");
const segundaNota = tdSegundaNota.textContent;
console.log(segundaNota);
// gerar media
const mediaFinal = aluno.querySelector(".info-media");
const mediaCalculada = (parseFloat (primeiraNota) + parseFloat (segundaNota)) / 2;
mediaFinal.textContent = mediaCalculada.toFixed(2);
}