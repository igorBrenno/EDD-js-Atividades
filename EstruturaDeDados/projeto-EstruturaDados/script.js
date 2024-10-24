function processarForm (ev) {
    ev.preventDefault()
    const n = document.querySelector("#nome").value
    const e = document.querySelector("#email").value
    const m = document.querySelector("#mensagem").value

    console.log(n, e, m)
}

const form = document.querySelector("#meuFormulario")

form.addEventListener("submit", processarForm)