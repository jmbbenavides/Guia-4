var Cabecera = /** @class */ (function () {
    function Cabecera(tituloId) {
        this.tituloElemento = document.getElementById(tituloId);
        this.color = getComputedStyle(this.tituloElemento).color;
        this.fuente = getComputedStyle(this.tituloElemento).fontFamily;
    }
    Cabecera.prototype.obtenerPropiedades = function () {
        var titulo = this.tituloElemento.textContent;
        var color = this.color;
        var fuente = this.fuente;
        console.log("T\u00EDtulo: ".concat(titulo, ", Color: ").concat(color, ", Fuente: ").concat(fuente));
    };
    Cabecera.prototype.alinearTitulo = function (alineacion) {
        this.tituloElemento.style.textAlign = alineacion;
        console.log("T\u00EDtulo alineado a: ".concat(alineacion));
    };
    Cabecera.prototype.imprimirPropiedades = function () {
        var titulo = this.tituloElemento.textContent;
        var color = this.color;
        var fuente = this.fuente;
        console.log("Propiedades del t\u00EDtulo: T\u00EDtulo: ".concat(titulo, ", Color: ").concat(color, ", Fuente: ").concat(fuente, ", Alineaci\u00F3n: ").concat(this.tituloElemento.style.textAlign));
    };
    return Cabecera;
}());
var cabecera = new Cabecera("titulo-pagina");
var btnObtenerPropiedades = document.getElementById("btn-obtener-propiedades");
var btnAlinearTitulo = document.getElementById("btn-alinear-titulo");
var btnImprimirPropiedades = document.getElementById("btn-imprimir-propiedades");
btnObtenerPropiedades.addEventListener("click", function () {
    cabecera.obtenerPropiedades();
});
btnAlinearTitulo.addEventListener("click", function () {
    var alineaciones = ['left', 'center', 'right'];
    var alineacion = prompt("Ingrese la alineación: 'left', 'center', o 'right'");
    if (alineaciones.includes(alineacion)) {
        cabecera.alinearTitulo(alineacion);
    }
    else {
        alert("Alineación no válida. Usa 'left', 'center' o 'right'.");
    }
});
btnImprimirPropiedades.addEventListener("click", function () {
    cabecera.imprimirPropiedades();
});
