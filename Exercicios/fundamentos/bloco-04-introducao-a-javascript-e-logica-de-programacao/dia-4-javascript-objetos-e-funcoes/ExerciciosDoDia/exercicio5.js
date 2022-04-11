function maior(inteiros){
    let menor = 0
    for(i in inteiros){
        if(inteiros[menor] > inteiros[i])
        menor = i
    }
    console.log(menor)  
}
maior([2, 4, 6, 7, 10, 0, -3])