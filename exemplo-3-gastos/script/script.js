const botao = document.querySelector(".transacao__button");

botao.addEventListener('click', function(event){
    event.preventDefault();
    const tabela = document.querySelector(".extrato__table");
    const nome = document.getElementById("transacaoInputName");
    const valor = document.getElementById("transacaoInputMoney");
    const data = document.getElementById("transacaoInputDate");

    const linha =document.createElement("tr");

    const colunaNome = document.createElement("td");
    const colunaNomeTexto = document.createTextNode(nome.value);
    colunaNome.appendChild(colunaNomeTexto);
    
    const colunaValor = document.createElement("td");
    const colunaValorTexto = document.createTextNode(valor.value);
    colunaValor.appendChild(colunaValorTexto);
    
    const colunaData = document.createElement("td");
    const colunaDataTexto = document.createTextNode(data.value);
    colunaData.appendChild(colunaDataTexto);

    linha.appendChild(colunaNome);
    linha.appendChild(colunaValor);
    linha.appendChild(colunaData);

    tabela.appendChild(linha);
});