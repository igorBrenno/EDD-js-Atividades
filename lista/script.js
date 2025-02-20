const items = []; // Inicializa a lista como um array vazio

function exibirArray(){
    const divMeuArray = document.getElementById("meuArray")
    divMeuArray.innerHTML = ""
    for (let i = 0; i < items.length; i++){
      divMeuArray.appendChild(criarDiv(items[i]))
    }
  }

  function criarDiv(valor){ 
  
    const novaDiv = document.createElement("div")
    novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1"
  
    const texto = document.createElement("h1")
    texto.className = "text-center"
    texto.innerText = valor
  
    novaDiv.appendChild(texto)
    return novaDiv
  }

// Adicionar elementos no final da lista
function append() {
   let element = documento.getElementById("elemento").value
  items.push(element);
  exibirArray()
}

// Inserir elementos em uma posição específica
function insert() {
    let element = documento.getElementById("elemento").value
    let  position = documento.getElementById("posicao").value
  if (position >= 0 && position <= items.length) {
    items.splice(position, 0, element);
    exibirArray()
    return true;
  }
  return false;
}

// Remover um elemento da lista
function remove(element) {
   let element = documento.getElementById("elemento").value
  const index = indexOf(element);
  if (index !== -1) {
    removeAt(index);
    exibirArray()
    return true;
  }
  return false;
}

// Remover elementos em uma posição específica
function removeAt(position) {
    let position = documento.getElementById("posicao").value
  if (position >= 0 && position < items.length) {
    items.splice(position, 1)[0];
    return exibirArray();
  }
  return null;
}

// Retorna a posição de um dado elemento
function indexOf() {
    let element = documento.getElementById("elemento").value
    items.indexOf(element);
    return exibirArray()
}

// Retorna se a lista está vazia
function isEmpty() {
    return items.length === 0;
}

// Retorna o tamanho da lista
function size() {
  return items.length;
}

// Retorna a lista como texto
function toString() {
  return items.join(", ");
}

// Imprime os elementos da lista
function print() {
  console.log(toString());
}

// Limpa a lista removendo todos os elementos
function clear() {
  items.length = 0;
}
