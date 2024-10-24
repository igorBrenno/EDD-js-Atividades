document.getElementById("formula").addEventListener("submit", (ev) => {
    ev.preventDefault()
    let texto = document.getElementById("texto").value;
    
    let contrario = "";
    for (let i = texto.length - 1 ; i >= 0; i--) {
        contrario += texto[i];
    }
    console.log(contrario);
});