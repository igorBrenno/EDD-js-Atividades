// Escreva um programa que solicite ao usuário o seu nome e a sua idade,
// armazenando esses valores em variáveis. Em seguida, remova o formulário e escreva uma mensagem de boas vindas, mostrando o nome e a idade do usuário.

document.getElementById("form").addEventListener("submit",function (e) {

    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var msg = "Boas vindas " + nome + " Idade " + idade;
    
    alert(msg);
    e.preventDefault()    
});


