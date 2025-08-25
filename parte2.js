// -------------------------
// Verificar si un estudiante tiene beneficio especial - O(1)
// -------------------------
function tieneBeneficioEspecial(estudiante) {
    return estudiante.beneficioEspecial === true;
}

// -------------------------
// Calcular combinaciones posibles en mesas de 2 - O(1)
// Fórmula: nC2 = n*(n-1)/2
// -------------------------
function combinacionesMesasDos(estudiantes) {
    const n = estudiantes.length;
    return n * (n - 1) / 2;
}

// -------------------------
// Pruebas con listas de distinto tamaño y medición de tiempos
// -------------------------
function probar() {
    const tamanos = [10, 1000, 100000, 1000000];

    tamanos.forEach(tam => {
        const estudiantes = [];
        for (let i = 0; i < tam; i++) {
            estudiantes.push({
                id: i,
                beneficioEspecial: Math.random() < 0.01
            });
        }

        console.log(`\nLista de ${tam} estudiantes:`);

        console.time("Verificación beneficio");
        const resultado = tieneBeneficioEspecial(estudiantes[0]);
        console.timeEnd("Verificación beneficio");

        console.log("Ejemplo beneficio:", resultado);

        console.time("Cálculo combinaciones");
        const combinaciones = combinacionesMesasDos(estudiantes);
        console.timeEnd("Cálculo combinaciones");

        console.log("Combinaciones posibles:", combinaciones);
    });
}

// Ejecutar
probar();







