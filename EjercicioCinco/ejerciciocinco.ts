// Clase abstracta Persona
abstract class Persona {
    // Atributos
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;

    // Constructor
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // Método para verificar si es mayor de edad
    esMayorDeEdad(): string {
        return this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
    }

    // Método abstracto para mostrar los datos personales
    abstract mostrarDatos(): string;
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona {
    sueldo: number;

    // Constructor que recibe además del sueldo
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad); // Llamamos al constructor de la clase padre
        this.sueldo = sueldo;
    }

    // Método para cargar el sueldo
    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    // Método para imprimir el sueldo
    imprimirSueldo(): string {
        return `El sueldo del empleado es $${this.sueldo}.`;
    }

    // Implementación del método abstracto para mostrar los datos personales
    mostrarDatos(): string {
        return `
            Nombre: ${this.nombre} <br>
            Apellido: ${this.apellido} <br>
            Dirección: ${this.direccion} <br>
            Teléfono: ${this.telefono} <br>
            Edad: ${this.edad} <br>
            ${this.esMayorDeEdad()} <br>
            ${this.imprimirSueldo()}
        `;
    }
}

// Creación de un objeto de la clase Empleado
const empleado = new Empleado("Juan", "Pérez", "Calle 123", "555-1234", 30, 1500);

// Mostrar los datos del empleado en el HTML
const output = document.getElementById("output");
if (output) {
    output.innerHTML = empleado.mostrarDatos();
}
