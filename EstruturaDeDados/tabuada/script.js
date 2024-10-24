document.getElementById("formula").addEventListener("submit", (ev) => {
    ev.preventDefault()
    let num = document.getElementById("num").value;
    
    for (let i = 0; i <= num; i++) {
        console.log(i * num);
    }
});