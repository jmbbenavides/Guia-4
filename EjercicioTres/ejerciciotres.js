var Cancion = /** @class */ (function () {
    // Constructor que recibe título y género
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""; // Inicialmente vacío
    }
    // Método set para asignar el autor
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    // Método get para obtener el autor
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    // Método para mostrar los datos de la canción
    Cancion.prototype.mostrarCancion = function () {
        return "T\u00EDtulo: ".concat(this.titulo, " <br> G\u00E9nero: ").concat(this.genero, " <br> Autor: ").concat(this.getAutor());
    };
    return Cancion;
}());
// Función para manejar la creación de la canción y mostrarla
document.getElementById("crearCancion").addEventListener("click", function () {
    // Obtener valores del formulario
    var titulo = document.getElementById("titulo").value;
    var genero = document.getElementById("genero").value;
    var autor = document.getElementById("autor").value;
    // Crear una instancia de la clase Cancion
    var cancion = new Cancion(titulo, genero);
    cancion.setAutor(autor);
    // Mostrar los detalles de la canción
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = cancion.mostrarCancion();
});
