const queue = []

function enqueue(valor) {
    queue.push(valor)
    updateUI()
}

function dequeue() {
    queue.shift()
    updateUI()
}

function check_size() {
    return console.log(queue.length)
}

function isEmpty() {
    return console.log(queue.length === 0)
}

function front() {
    return console.log(isEmpty() ? null : queue[0])
}

function rear() {
    return console.log(isEmpty() ? null : queue[size() - 1])
}

function updateUI() {
    const meuArrayDiv = document.getElementById('meuArray')
    meuArrayDiv.innerHTML = queue.join(', ')
}

function getElementValue() {
    const valor = document.getElementById('elemento').value
    if (valor) {
        enqueue(valor)
        document.getElementById('elemento').value = ''
    }
}
