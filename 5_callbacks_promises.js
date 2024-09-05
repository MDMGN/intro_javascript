/* function longest(string) {
    const objAcc = string.split("").reduce((acc, letter) => {
           // Incrementa el valor de la letra si ya existe, o inicializa en 1 si no existe
           acc[letter] = (acc[letter] || 0) + 1;
           return acc;
       }, { } );
       // Retorna el valor máximo de las ocurrencias de las letras
       return Object.values(objAcc).length ? Math.max(...Object.values(objAcc) ) :  0;
} */


const arr_ = [2,4,5,6,7]

function filter (arr,cb){
    const arr2= []

    for(let num of arr){
        if( cb(num)){
            arr2.push(num)
           }
    }
    return arr2
}

console.log(filter(arr_, (el)=> el !== 7 ))