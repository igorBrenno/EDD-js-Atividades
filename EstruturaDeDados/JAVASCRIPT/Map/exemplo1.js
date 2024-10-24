const mapa = new Map();
mapa.set('a', 1);
mapa.set('b', 2);
mapa.set('c', 3);

for (const [chave, valor] of mapa) {
    console.log(`${chave} : ${valor}`);
}