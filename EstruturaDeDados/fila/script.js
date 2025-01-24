const queue = []

function enqueue(valor) {
    queue.push(valor)
    updateUI()
}

function dequeue() {
    queue.shift()
    updateUI()
}

function size() {
    return queue.length
}

function isEmpty() {
    return queue.length === 0
}

function front() {
    return isEmpty() ? null : queue[0]
}

function rear() {
    return isEmpty() ? null : queue[size() - 1]
}

function updateUI() {
    const meuArrayDiv = document.getElementById('meuArray')
    meuArrayDiv.innerHTML = queue
}

function getElementValue() {
    const valor = document.getElementById('elemento').value
    if (valor) {
        enqueue(valor)
        document.getElementById('elemento').value = ''
    }
}
