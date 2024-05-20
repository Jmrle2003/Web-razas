var carrito = [];

function agregarProducto(nombre, precio) {
    // Crear un objeto que represente el producto
    var producto = {
        nombre: nombre,
        precio: precio
    };

    // Agregar el producto al carrito
    carrito.push(producto);

    // Mostrar alerta
    alert("¡Se ha agregado al carrito!");

    // Actualizar la visualización del carrito
    mostrarCarrito();
}

function mostrarCarrito() {
    var itemsCarrito = document.getElementById("items-carrito");
    itemsCarrito.innerHTML = ""; // Limpiar el contenido anterior del carrito

    // Recorrer todos los productos en el carrito
    carrito.forEach(function(producto) {
        var nuevoItem = document.createElement("div");
        nuevoItem.innerHTML = `<p>${producto.nombre} - $${producto.precio}</p>`;
        itemsCarrito.appendChild(nuevoItem);
    });
}


