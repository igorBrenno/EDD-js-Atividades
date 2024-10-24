document.getElementById("formula").addEventListener("submit", (ev) => {
    ev.preventDefault()
    let list = ["a", "e", "i", "o", "u"]
    let texto = document.getElementById("texto").value;
    
    let contador = 0;
    let y = 0
    for (let i of texto) {
        for (let j of list)
            if (i == j) {
                contador++;
            }
    }
    console.log(contador);
});