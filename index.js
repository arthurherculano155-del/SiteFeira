function show(){
    document.getElementById("tela").style.display = "none";
    document.getElementById("login").style.display = "flex";
}

function verificar(){
    let n1 = document.getElementById("nome").value;
    let n2 = document.getElementById("senha").value;

    if(n1 === "Adm123" && n2 === "root"){
        document.getElementById("tela").style.display = "block";
        window.location.href = "https://docs.google.com/forms/d/1CIDPlC52FJBGePbVuQEkjBuPSVwmVXUXWgI7uFsxJOE/viewform?edit_requested=true#responses"
    }
}