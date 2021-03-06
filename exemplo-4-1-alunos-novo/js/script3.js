const adicionarAluno = document.querySelector("#adicionar-aluno");

adicionarAluno.addEventListener('click', function(event){
    event.preventDefault();

    const formularioAluno = document.querySelector("#form-adiciona");
    const novoAluno = obterOsDadosDoFormulario(formularioAluno);

    const alunoTr = document.createElement("tr");
    const nomeAlunoTd = document.createElement("td");
    const notaUmAlunoTd = document.createElement("td");
    const notaDoisAlunoTd = document.createElement("td");
    const mediaAlunoTd = document.createElement("td");

    nomeAlunoTd.textContent = novoAluno.nomeAluno;
    notaUmAlunoTd.textContent = novoAluno.notaUmAluno;
    notaDoisAlunoTd.textContent = novoAluno.notaDoisAluno;
    mediaAlunoTd.textContent = novoAluno.media;

    alunoTr.appendChild(nomeAlunoTd);
    alunoTr.appendChild(notaUmAlunoTd);
    alunoTr.appendChild(notaDoisAlunoTd);
    alunoTr.appendChild(mediaAlunoTd);

    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);
});

function obterOsDadosDoFormulario(formulario) {
    const objetoAluno = {
        ,nomeAluno: formulario.nome.value
        ,notaUmAluno: formulario.notaUmAluno.value
        ,notaDoisAluno: formulario.notaDoisAluno.value
        ,media: calculaMedia(formulario.notaUmAluno.value, formulario.notaDoisAluno.value)
    }
    return objetoAluno;
}