const n1 = "2"
const n2 = 2

const resp =  (1 === n2)

// console.log( resp ? "true" : "false")

/* // Operadores de cortocircuito OR ( 0 , undefined, false, null)
const value = 2

const resp2 =  value || "some" */

 // Operadores de cortocircuito  AND ( 0 , undefined, false, null)
const value = "Casa"

const resp2 =  value && "some"


console.log(resp2)

// Optional chaining

const value2 = {
    nombre : "Darren"
}

console.log(value2?.apellido)

//Nullish coalescing

const value3 = undefined ?? "some"

console.log(value3)
