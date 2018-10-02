const email = document.getElementById ('newsInputEmail');
const botao = document.querySelector ('.news__button');

botao.addEventListener ('click', function(event){
    event.preventDefault();
    if ( email.value ===''){
        alert ("preencha o campo corretamente");
    } else {
    const msg = document.createElement('span');
    const new_msg = document.createTextNode ('Email Cadastrado com sucesso!');
    msg.appendChild (new_msg);
    const resposta = document.querySelector ('.news__form')
    resposta.insertBefore (new_msg, email.parentNode);
    }
});