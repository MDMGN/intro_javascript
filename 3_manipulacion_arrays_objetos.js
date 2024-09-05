// Destructuring

const persona = {
    nombre: 'Michael',
    edad: 25,
    peliculasFavoritas : ["Avengers","Iron - Man"],
}

console.log(persona.nombre)
const { peliculasFavoritas, ...r } = persona

const alumnos = ["Imanol","Mikel","Asier","Marcial","Unai"];

let obj= {
    Imanol : "Jauregui"
}

// Propiedades computadas
obj={
    ...obj,
    [alumnos[3]]: "Jauregui"
}
console.log(obj)


const frutas = ["manzana", "pera","fresa"]


const [fruta1,fruta2,...restFruit] = frutas

console.log({fruta1, fruta2, restFruit})

const obj2 = {
    fruta1
}

 // Object Values
Object.values(persona).forEach((el)=> ({nombre: "Darren"}) )


 // Object Keys
 Object.keys(persona).forEach((el)=> console.log(el) )



 // Filter

 const frutas2 = frutas.filter((el)=> el !== "manzana" )
 console.log(frutas2)

 const obj3 = Object.keys(persona).filter( el => el != "nombre")
 console.log(obj3)






