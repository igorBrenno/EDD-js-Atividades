const queue = []

function enqueue(valoe){
    queue.push(valoe)
}

function dequeue(){
    return queue.shift()
}

function size(){
    return queue.length
}

function isEmpty(){
    return queue.length === 0
}

function front(){
    return isEmpty()? null: queue[0]
}

function rear(){
    return isEmpty()? null: queue[size()-1]
}

export {enqueue, dequeue, size, isEmpty, front, rear}