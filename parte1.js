// ----------- Función auxiliar para medir tiempo -----------
function medirTiempo(funcion, ...args) {
  let inicio = performance.now();
  funcion(...args);
  let fin = performance.now();
  console.log(`Tiempo: ${(fin - inicio).toFixed(5)} ms`);
}

// ----------- Algoritmo 1: O(1) -----------
function obtenerElemento(lista) {
  return lista[0];
}

// ----------- Algoritmo 2: O(n) -----------
function recorrerLista(n) {
  for (let i = 0; i < n; i++) {
    // console.log(i);  // se omite para no retrasar la medición
    let x = i;
  }
}

// ----------- Algoritmo 3: O(n²) -----------
function recorrerMatriz(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let x = i + j;
    }
  }
}

// ----------- Pruebas -----------

// Lista de ejemplo
let lista = Array.from({ length: 100000 }, (_, i) => i);

console.log("Algoritmo 1 - O(1)");
medirTiempo(obtenerElemento, lista);

console.log("Algoritmo 2 - O(n)");
medirTiempo(recorrerLista, 100000);

console.log("Algoritmo 3 - O(n²)");
// cuidado: usar n pequeño porque crece rápido
medirTiempo(recorrerMatriz, 1000);

