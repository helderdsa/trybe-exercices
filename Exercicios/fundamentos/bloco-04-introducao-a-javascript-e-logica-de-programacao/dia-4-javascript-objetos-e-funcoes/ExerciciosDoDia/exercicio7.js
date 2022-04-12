function maisRepete(array){
    let comparador = 0
    let contador = 0
    let repetiu = 0

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[i] == array[j]){
                contador++
            }
        }
        if(repetiu < contador){
            repetiu = contador
            comparador = array[i]
        }
        contador = 0
    }
    return comparador
}  
console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]))