function howMany(selectObject) {
    var numeroSelecionadas = 0;
    for (let i of selectObject) {
      if (i.selected) {
        numeroSelecionadas++;
      }
    }
    return numeroSelecionadas;
  }

  var btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    alert(
      "Total de opções selecionadas: " +
        howMany(document.selectForm.tipoMusica),
    );
  });