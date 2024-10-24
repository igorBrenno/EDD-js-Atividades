const minhaLista = document.getElementById('minhaLista');
const itens = minhaLista.getElementsByTagName('li');

// Iterando sobre as propriedades do objeto `itens`
for (let indice in itens) {
    if (itens.hasOwnProperty(indice)) { // Garantindo que a propriedade pertence diretamente ao objeto
        itens[indice].style.color = 'blue'; // Alterando a cor do texto para azul
        itens[indice].style.fontWeight = 'bold'; // Deixando o texto em negrito
    }
}