var Cabecera = /** @class */ (function () {
    function Cabecera(tituloId) {
        // Obtiene el elemento del título por su ID
        this.tituloElemento = document.getElementById(tituloId);
        // Obtiene los estilos actuales del título
        this.color = getComputedStyle(this.tituloElemento).color;
        this.fuente = getComputedStyle(this.tituloElemento).fontFamily;
    }
    // Método para obtener y mostrar las propiedades del título (texto, color, fuente)
    Cabecera.prototype.obtenerPropiedades = function () {
        var titulo = this.tituloElemento.textContent;
        var color = this.color;
        var fuente = this.fuente;
        console.log("T\u00EDtulo: ".concat(titulo, ", Color: ").concat(color, ", Fuente: ").concat(fuente));
    };
    // Método para alinear el título a la izquierda, derecha o centro
    Cabecera.prototype.alinearTitulo = function (alineacion) {
        this.tituloElemento.style.textAlign = alineacion;
        console.log("T\u00EDtulo alineado a: ".concat(alineacion));
    };
    // Método para imprimir todas las propiedades del título (texto, color, fuente, alineación)
    Cabecera.prototype.imprimirPropiedades = function () {
        var titulo = this.tituloElemento.textContent;
        var color = this.color;
        var fuente = this.fuente;
        console.log("Propiedades del t\u00EDtulo: T\u00EDtulo: ".concat(titulo, ", Color: ").concat(color, ", Fuente: ").concat(fuente, ", Alineaci\u00F3n: ").concat(this.tituloElemento.style.textAlign));
    };
    return Cabecera;
}());
// Asumiendo que ya tienes un elemento h1 con el id "titulo-pagina" en el HTML
var cabecera = new Cabecera("titulo-pagina");
// Vinculamos los métodos de la clase a los botones en el HTML
var btnObtenerPropiedades = document.getElementById("btn-obtener-propiedades");
var btnAlinearTitulo = document.getElementById("btn-alinear-titulo");
var btnImprimirPropiedades = document.getElementById("btn-imprimir-propiedades");
// Evento para obtener y mostrar las propiedades del título
btnObtenerPropiedades.addEventListener("click", function () {
    cabecera.obtenerPropiedades(); // Obtener título, color y fuente
});
// Evento para alinear el título según la elección del usuario
btnAlinearTitulo.addEventListener("click", function () {
    var alineaciones = ['left', 'center', 'right'];
    var alineacion = prompt("Ingrese la alineación: 'left', 'center', o 'right'");
    if (alineaciones.includes(alineacion)) {
        cabecera.alinearTitulo(alineacion); // Alinear título según la entrada
    }
    else {
        alert("Alineación no válida. Usa 'left', 'center' o 'right'.");
    }
});
// Evento para imprimir todas las propiedades del título
btnImprimirPropiedades.addEventListener("click", function () {
    cabecera.imprimirPropiedades(); // Imprimir todas las propiedades
});
