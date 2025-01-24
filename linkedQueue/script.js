class Node {
    constructor (valor) {
        value = this.valor
        next = null
    }
}

class Queue {
    constructor() {
        this._front = null
        this._tail = null
        this._size = 0
    }

    size() {
        return this._size
    }

    enqueue (value) {
        const node = new Node(value)
    }
}