function soma(n1, n2) {
    let resp = 0
    resp = n1 + n2
    console.log(resp)
}

function sub(n1, n2) {
    let resp = 0
    resp = n1 - n2
    console.log(resp)
}

function mul(n1, n2) {
    let resp = 0
    resp = n1 * n2
    console.log(resp)
}

function div(n1, n2) {
    if (n1 == 0 || n2 == 0) {
        console.log("Valor da divisão invalido!")
    }
    let resp = 0
    resp = n1 / n2
    console.log(resp)
}

document.getElementById("meuform").addEventListener("submit", (e) => {
    e.preventDefault();
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let cal = document.getElementById("calculo").value;

    switch(cal) {
        case "+":
            soma(n1, n2);
            break;
        case "-":
            sub(n1, n2);
            break;
        case "*":
            mul(n1, n2);
            break;
        case "/":
            div(n1, n2);
            break;
    }
})