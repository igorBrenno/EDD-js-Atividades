document.getElementById("meuform").addEventListener("submit", (e) => {
    e.preventDefault();
    let numero = parseInt(document.getElementById("numero").value);


    if (numero % 2 == 0) {
        alert("par")
    } else {
        alert("impar")
    }

    alert(resp);
})