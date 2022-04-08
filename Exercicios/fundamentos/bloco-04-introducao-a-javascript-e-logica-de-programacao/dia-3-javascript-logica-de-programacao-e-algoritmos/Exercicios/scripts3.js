let array = ['java', 'javascript', 'python', 'html', 'css'];
console.log(array[0].length)
let maiorPalavra = ""
let menorPalavra = ""
let comparador = array[0].length
for(let i = 0; i < array.length; i++){
    if(comparador < array[i].length){
        maiorPalavra = array[i]
    }
    comparador = array[i].length
}
console.log(maiorPalavra)
for(let i = 0; i < array.length; i++){
    if(comparador > array[i].length){
        menorPalavra = array[i]
    }
    comparador = array[i].length
}
console.log(menorPalavra)
