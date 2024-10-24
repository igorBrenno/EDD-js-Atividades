let v1 = parseInt(prompt("Valor 1: "))
let v2 = parseInt(prompt("Valor 2: "))
let sinal = prompt("Qual o sinal: ")

var resp = 0
function soma (v1, v2) {
    resp = v1 + v2 
    return resp
}

function sub (v1, v2) {
    resp = v1 - v2 
    return resp
}

function div (v1, v2) {
    if (v1 == 0 || v2 == 0) {
        return alert("Não PODE DIVIDIR POR 0 ANIMAL!!!")
    }
    resp = v1 / v2 
    return resp
}

function mul (v1, v2) {
    resp = v1 * v2 
    return resp
}

if (sinal == "+") {
    soma(v1, v2)
}
else if (sinal == "-") {
    sub(v1, v2)
}
else if (sinal == "*") {
    mul(v1, v2)
}
else if (sinal == "/") {
    div(v1, v2)
}

alert(resp)