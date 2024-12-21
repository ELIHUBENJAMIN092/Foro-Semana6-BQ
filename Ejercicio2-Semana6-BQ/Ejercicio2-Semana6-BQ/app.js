// Función para filtrar objetos BQ
function filtrarMayoresDeEdad(personas) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const mayores = personas.filter(persona => persona.edad > 18);
            resolve(mayores);
        }, 1500); // Retraso de 1.5 segundos
    });
}

// Uso con async/await
async function ejecutarFiltroMayoresDeEdad() {
    const personas = [
        { nombre: "Benjamin", edad: 29 },
        { nombre: "Luis", edad: 22 },
        { nombre: "Leonardo", edad: 9 },
    ];
    console.log("Filtrando mayores de edad...");
    const mayores = await filtrarMayoresDeEdad(personas);
    const nombresMayores = mayores.map(persona => persona.nombre); // Extrae los nombres
    console.log("Nombres de los mayores de edad:", nombresMayores);
}

ejecutarFiltroMayoresDeEdad();