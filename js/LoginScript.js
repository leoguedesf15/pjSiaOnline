
$('form').submit(function (ev){
    ev.preventDefault();
var email = $('#inputEmail');
var senha = $('#inputSenha');
console.log(senha);
if(senha.val().length>5){
    console.log("entrou");
    window.location.href="home/";
}else{
    console.log("não entrou na condição")
    var no = document.createElement('div');
    no.className="alert alert-warning";
    no.innerHTML="Senha Inválida. Por favor digite novamente";
    
        if(typeof(document.getElementsByClassName("alert")[0])==="undefined"){
            $('form')[0].appendChild(no);
        }
    
}
});
