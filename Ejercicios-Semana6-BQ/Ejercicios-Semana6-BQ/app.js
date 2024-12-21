// Función para calcular promedio BQ
function calcularPromedioConDelay(numeros) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const suma = numeros.reduce((acc, num) => acc + num, 0);
            const promedio = suma / numeros.length;
            resolve(promedio);
        }, 2000); // Retraso de 2 segundos
    });
}

// Uso con async/await
async function ejecutarCalculoPromedio() {
    const numeros = [1, 2, 3, 4, 5];
    console.log("Calculando promedio...");
    const promedio = await calcularPromedioConDelay(numeros);
    console.log(`El promedio es: ${promedio}`);
}

ejecutarCalculoPromedio();