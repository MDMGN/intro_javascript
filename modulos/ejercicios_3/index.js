import * as functions from "./helpers.js"

console.log(functions.fetchData(1).then(obj=>console.log(obj)))