var _a, _b, _c, _d, _e, _f;
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        return a / b;
    };
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    Calculadora.prototype.factorial = function (n) {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        var resultado = 1;
        for (var i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
var inputNumero1 = document.getElementById("numero1");
var inputNumero2 = document.getElementById("numero2");
var resultadoDiv = document.getElementById("resultado");
function mostrarResultado(resultado) {
    if (resultadoDiv) {
        resultadoDiv.textContent = resultado;
    }
}
(_a = document.getElementById("btn-sumar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var num1 = parseFloat(inputNumero1.value);
    var num2 = parseFloat(inputNumero2.value);
    var suma = calculadora.sumar(num1, num2);
    mostrarResultado("Resultado de la suma: ".concat(suma));
});
(_b = document.getElementById("btn-restar")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var num1 = parseFloat(inputNumero1.value);
    var num2 = parseFloat(inputNumero2.value);
    var resta = calculadora.restar(num1, num2);
    mostrarResultado("Resultado de la resta: ".concat(resta));
});
(_c = document.getElementById("btn-multiplicar")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var num1 = parseFloat(inputNumero1.value);
    var num2 = parseFloat(inputNumero2.value);
    var multiplicacion = calculadora.multiplicar(num1, num2);
    mostrarResultado("Resultado de la multiplicaci\u00F3n: ".concat(multiplicacion));
});
(_d = document.getElementById("btn-dividir")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    var num1 = parseFloat(inputNumero1.value);
    var num2 = parseFloat(inputNumero2.value);
    try {
        var division = calculadora.dividir(num1, num2);
        mostrarResultado("Resultado de la divisi\u00F3n: ".concat(division));
    }
    catch (error) {
        mostrarResultado(error.message);
    }
});
(_e = document.getElementById("btn-potencia")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
    var base = parseFloat(inputNumero1.value);
    var exponente = parseFloat(inputNumero2.value);
    var potencia = calculadora.potencia(base, exponente);
    mostrarResultado("Resultado de la potencia: ".concat(potencia));
});
(_f = document.getElementById("btn-factorial")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
    var numero = parseFloat(inputNumero1.value);
    try {
        var factorial = calculadora.factorial(numero);
        mostrarResultado("Resultado del factorial: ".concat(factorial));
    }
    catch (error) {
        mostrarResultado(error.message);
    }
});
