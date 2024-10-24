document.getElementById("meuform").addEventListener("submit", (e) => {
    e.preventDefault();
    let salario = parseFloat(document.getElementById("salario").value);
    let meses = parseFloat(document.getElementById("meses").value);
    let resp = salario * meses;
    
    alert(resp);
})