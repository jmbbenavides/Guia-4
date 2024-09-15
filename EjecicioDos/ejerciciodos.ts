class Calculadora {

    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        return a / b;
    }

    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    factorial(n: number): number {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

const calculadora = new Calculadora();

const inputNumero1 = <HTMLInputElement>document.getElementById("numero1");
const inputNumero2 = <HTMLInputElement>document.getElementById("numero2");
const resultadoDiv = document.getElementById("resultado");

function mostrarResultado(resultado: string) {
    if (resultadoDiv) {
        resultadoDiv.textContent = resultado;
    }
}

document.getElementById("btn-sumar")?.addEventListener("click", () => {
    const num1 = parseFloat(inputNumero1.value);
    const num2 = parseFloat(inputNumero2.value);
    const suma = calculadora.sumar(num1, num2);
    mostrarResultado(`Resultado de la suma: ${suma}`);
});

document.getElementById("btn-restar")?.addEventListener("click", () => {
    const num1 = parseFloat(inputNumero1.value);
    const num2 = parseFloat(inputNumero2.value);
    const resta = calculadora.restar(num1, num2);
    mostrarResultado(`Resultado de la resta: ${resta}`);
});

document.getElementById("btn-multiplicar")?.addEventListener("click", () => {
    const num1 = parseFloat(inputNumero1.value);
    const num2 = parseFloat(inputNumero2.value);
    const multiplicacion = calculadora.multiplicar(num1, num2);
    mostrarResultado(`Resultado de la multiplicación: ${multiplicacion}`);
});

document.getElementById("btn-dividir")?.addEventListener("click", () => {
    const num1 = parseFloat(inputNumero1.value);
    const num2 = parseFloat(inputNumero2.value);
    try {
        const division = calculadora.dividir(num1, num2);
        mostrarResultado(`Resultado de la división: ${division}`);
    } catch (error) {
        mostrarResultado(error.message);
    }
});

document.getElementById("btn-potencia")?.addEventListener("click", () => {
    const base = parseFloat(inputNumero1.value);
    const exponente = parseFloat(inputNumero2.value);
    const potencia = calculadora.potencia(base, exponente);
    mostrarResultado(`Resultado de la potencia: ${potencia}`);
});

document.getElementById("btn-factorial")?.addEventListener("click", () => {
    const numero = parseFloat(inputNumero1.value);
    try {
        const factorial = calculadora.factorial(numero);
        mostrarResultado(`Resultado del factorial: ${factorial}`);
    } catch (error) {
        mostrarResultado(error.message);
    }
});
