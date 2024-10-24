const palavra = ["anime", "termo", "negro", "poder"]
const palavraSecreta = palavra[Math.floor(Math.random() * palavra.length)]
let tentativa = 0;
document.getElementById("formula").addEventListener("submit", (ev) => {
    ev.preventDefault()
    let texto = document.getElementById("texto").value;

    tentativa++
    console.log(palavraSecreta);
    
    if (texto == palavraSecreta) {
        console.log("Acertou com: ", tentativa);
    }
    else {
        console.log("Errou");
    }
    
});