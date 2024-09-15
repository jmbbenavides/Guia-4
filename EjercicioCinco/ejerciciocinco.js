var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase abstracta Persona
var Persona = /** @class */ (function () {
    // Constructor
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    // Método para verificar si es mayor de edad
    Persona.prototype.esMayorDeEdad = function () {
        return this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
    };
    return Persona;
}());
// Clase Empleado que hereda de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    // Constructor que recibe además del sueldo
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this; // Llamamos al constructor de la clase padre
        _this.sueldo = sueldo;
        return _this;
    }
    // Metodo para cargar el sueldo
    Empleado.prototype.cargarSueldo = function (sueldo) {
        this.sueldo = sueldo;
    };
    // Método para imprimir el sueldo
    Empleado.prototype.imprimirSueldo = function () {
        return "El sueldo del empleado es $".concat(this.sueldo, ".");
    };
    // Implementación del método abstracto para mostrar los datos personales
    Empleado.prototype.mostrarDatos = function () {
        return "\n            Nombre: ".concat(this.nombre, " <br>\n            Apellido: ").concat(this.apellido, " <br>\n            Direcci\u00F3n: ").concat(this.direccion, " <br>\n            Tel\u00E9fono: ").concat(this.telefono, " <br>\n            Edad: ").concat(this.edad, " <br>\n            ").concat(this.esMayorDeEdad(), " <br>\n            ").concat(this.imprimirSueldo(), "\n        ");
    };
    return Empleado;
}(Persona));
// Creación de un objeto de la clase Empleado
var empleado = new Empleado("Juan", "Pérez", "Calle 123", "555-1234", 30, 1500);
// Mostrar los datos del empleado en el HTML
var output = document.getElementById("output");
if (output) {
    output.innerHTML = empleado.mostrarDatos();
}
