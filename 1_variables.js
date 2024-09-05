// Tipos Variables primitivos

let nombre = 'Darren';

let edad = 25

let  masculino = true // false

undefined  || null

const apellidos = "Vargas Ramirez" + " ";


const saludo = ` Hola ${apellidos}`; // Template strings

// Tipos de variables compuestas

// Arrays
const numbers= [1,2,3,4,["ssd"]]

//numbers = ['p','a']

// Objetos

const persona = {
    nombre: 'Michael',
    edad: 25,
    saludar : function (){
        console.log(`Hello ${this.nombre}!`)
    },
    peliculasFavoritas : ["Avengers","Iron - Man"],

}

persona.nombre = "Darren"
persona.saludar()

