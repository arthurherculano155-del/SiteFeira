function show(){
    document.getElementById("tela").style.display = "none";
    document.getElementById("login").style.display = "flex";
}

function fecharTela(){
    document.getElementById("login").style.display = "none";
    document.getElementById("tela").style.display = "block";
}

function verificar(){
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    if(nome === "Adm123" && senha === "root"){
        window.location.href = "https://docs.google.com/forms/d/1CIDPlC52FJBGePbVuQEkjBuPSVwmVXUXWgI7uFsxJOE/edit?edit_requested=true#responses";
    } else{
        document.getElementById("Error").innerText = "Usuário ou senha incorretos";
    }
}