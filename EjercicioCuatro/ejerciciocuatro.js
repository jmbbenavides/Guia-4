var Cuenta = /** @class */ (function () {
    // Constructor
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    // Método para depositar
    Cuenta.prototype.depositar = function () {
        if (this.cantidad < 5) {
            return "El valor a depositar debe ser mayor a $5.00.";
        }
        else {
            return "Se ha depositado correctamente $".concat(this.cantidad, ".");
        }
    };
    // Método para retirar
    Cuenta.prototype.retirar = function (valor) {
        if (this.cantidad <= 0) {
            return "No hay saldo en la cuenta.";
        }
        else if (valor < 5) {
            return "El valor a retirar debe ser mayor a $5.00.";
        }
        else if (valor > this.cantidad) {
            return "No hay suficiente saldo para retirar esa cantidad.";
        }
        else {
            this.cantidad -= valor;
            return "Has retirado $".concat(valor, ". Te queda $").concat(this.cantidad, " en tu cuenta.");
        }
    };
    // Método para mostrar los datos de la cuenta
    Cuenta.prototype.mostrarDatos = function () {
        return "Nombre: ".concat(this.nombre, " <br> Tipo de cuenta: ").concat(this.tipoCuenta, " <br> N\u00FAmero de cuenta: ").concat(this.numeroCuenta);
    };
    return Cuenta;
}());
// Variables globales para manejar la cuenta
var miCuenta = null;
// Crear una cuenta
document.getElementById("crearCuenta").addEventListener("click", function () {
    var nombre = document.getElementById("nombre").value;
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var tipoCuenta = document.getElementById("tipoCuenta").value;
    var numeroCuenta = document.getElementById("numeroCuenta").value;
    miCuenta = new Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta);
    // Mostrar detalles de la cuenta
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = miCuenta.mostrarDatos();
});
// Depositar dinero
document.getElementById("depositar").addEventListener("click", function () {
    if (miCuenta) {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = miCuenta.depositar();
    }
    else {
        alert("Primero debes crear una cuenta.");
    }
});
// Retirar dinero
document.getElementById("retirar").addEventListener("click", function () {
    if (miCuenta) {
        var valor = parseFloat(document.getElementById("valor").value);
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = miCuenta.retirar(valor);
    }
    else {
        alert("Primero debes crear una cuenta.");
    }
});
