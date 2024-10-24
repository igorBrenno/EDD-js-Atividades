document.getElementById("meuform").addEventListener("submit", (e) => {
    e.preventDefault();
    let circo = document.getElementById("circulo").value;
    let resp = Math.PI * circo ** 2;
    console.log(resp);
})