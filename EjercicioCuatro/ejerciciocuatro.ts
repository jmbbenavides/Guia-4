class Cuenta {
    // Atributos
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: string;

    // Constructor
    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    // Método para depositar
    depositar(): string {
        if (this.cantidad < 5) {
            return "El valor a depositar debe ser mayor a $5.00.";
        } else {
            return `Se ha depositado correctamente $${this.cantidad}.`;
        }
    }

    // Método para retirar
    retirar(valor: number): string {
        if (this.cantidad <= 0) {
            return "No hay saldo en la cuenta.";
        } else if (valor < 5) {
            return "El valor a retirar debe ser mayor a $5.00.";
        } else if (valor > this.cantidad) {
            return "No hay suficiente saldo para retirar esa cantidad.";
        } else {
            this.cantidad -= valor;
            return `Has retirado $${valor}. Te queda $${this.cantidad} en tu cuenta.`;
        }
    }

    // Método para mostrar los datos de la cuenta
    mostrarDatos(): string {
        return `Nombre: ${this.nombre} <br> Tipo de cuenta: ${this.tipoCuenta} <br> Número de cuenta: ${this.numeroCuenta}`;
    }
}

// Variables globales para manejar la cuenta
let miCuenta: Cuenta | null = null;

// Crear una cuenta
document.getElementById("crearCuenta")!.addEventListener("click", () => {
    const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    const cantidad = parseFloat((document.getElementById("cantidad") as HTMLInputElement).value);
    const tipoCuenta = (document.getElementById("tipoCuenta") as HTMLInputElement).value;
    const numeroCuenta = (document.getElementById("numeroCuenta") as HTMLInputElement).value;

    miCuenta = new Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta);
    
    // Mostrar detalles de la cuenta
    const resultado = document.getElementById("resultado")!;
    resultado.innerHTML = miCuenta.mostrarDatos();
});

// Depositar dinero
document.getElementById("depositar")!.addEventListener("click", () => {
    if (miCuenta) {
        const resultado = document.getElementById("resultado")!;
        resultado.innerHTML = miCuenta.depositar();
    } else {
        alert("Primero debes crear una cuenta.");
    }
});

// Retirar dinero
document.getElementById("retirar")!.addEventListener("click", () => {
    if (miCuenta) {
        const valor = parseFloat((document.getElementById("valor") as HTMLInputElement).value);
        const resultado = document.getElementById("resultado")!;
        resultado.innerHTML = miCuenta.retirar(valor);
    } else {
        alert("Primero debes crear una cuenta.");
    }
});
