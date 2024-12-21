// Función para ordenar objetos BQ
function ordenarPorPropiedad(array, propiedad) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const ordenado = [...array].sort((a, b) => a[propiedad] - b[propiedad]);
            resolve(ordenado);
        }, 3000); // Retraso de 3 segundo
    });
}

// Uso con async/await
async function ejecutarOrdenamiento() {
    const productos = [
        { nombre: "Producto A", precio: 66 },
        { nombre: "Producto B", precio: 22 },
        { nombre: "Producto C", precio: 100 },
    ];
    console.log("Ordenando productos por precio...");
    const productosOrdenados = await ordenarPorPropiedad(productos, "precio");
    const preciosOrdenados = productosOrdenados.map(producto => producto.precio); // Extraer precios
    console.log("Precios ordenados:", preciosOrdenados);
}

ejecutarOrdenamiento();