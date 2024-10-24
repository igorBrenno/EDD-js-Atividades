let fila = 10;

while (fila > 0) {
    console.log(`Continua esperando... [posição: ${fila}]`);
    // Simulação de espera de 2 segundos
    setTimeout(() => {}, 2000);
    fila--;
}
console.log('Sua vez chegou! Atendido!');