function menor(inteiros){
    let maior = 0
    for(i in inteiros){
        if(inteiros[maior] < inteiros[i])
        maior = i
    }
    console.log(maior)  
}
menor([2, 3, 6, 7, 10, 1])