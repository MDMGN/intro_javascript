// Composición y clousure

function saludar(){
    const nombre = "Darren"
     
    return function (){
        console.log(`Hola ${nombre} desde saludar!`)
    }
}



saludar()()

function sumar(n){
    return function(n2){
        console.log(n + n2)
    }
}

const sumar5=sumar(5)

console.log(sumar5(2))

const  saludar2= ()=>{

    nombre = "Darren"
    return  ()=>{
        console.log(nombre)
    }
    function saludarDentro(){
        console.log("")
    }

    saludar2()

}
saludar2()()

// Metodos de arrays
const frutas = ["manzana", "pera","fresa"]


const frutasConColor= frutas.map(function (fruta){
   return `${fruta} Azul`
})

const precios = [45.60,70,50]

let total = precios.reduce((acc,item) => {
    acc.push(item)
    return acc
} ,[])


console.log(total)


