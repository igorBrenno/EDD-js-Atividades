document.getElementById("meuform").addEventListener("submit", (e) => {
    e.preventDefault();
    let cel = document.getElementById("cel").value;
    let resp = (cel * 9 / 5) + 32;
    alert(resp);
})