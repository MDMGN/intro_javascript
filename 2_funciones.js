// Composición y closure

/* function saludar(){
    nombre = "Darren"
     
    return function (){
        console.log(nombre)
    }
}

saludar()() */
const  saludar2= ()=>{
    nombre = "Darren"
    return  ()=>{
        console.log(nombre)
    }
}
saludar2()()

const frutas = ["manzana", "pera","fresa"]


const frutasConColor= frutas.map(function (fruta){
   return `${fruta} Azul`
})

const precios = [45.60,70,50]

const total = precios.reduce((acc,item) => {
    acc.push(item)
    return acc
} ,[])


console.log(total)

