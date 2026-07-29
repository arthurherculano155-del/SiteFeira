function show(){
    document.getElementById("tela").style.display = "none";
    document.getElementById("login").style.display = "flex";
}

function verificar(){
    let n1 = document.getElementById("nome").value;
    let n2 = document.getElementById("senha").value;

    if(n1 === "Adm123" && n2 === "root"){
        document.getElementById("tela").style.display = "block";
        document.getElementById("login").style.display = "none";
    }
}