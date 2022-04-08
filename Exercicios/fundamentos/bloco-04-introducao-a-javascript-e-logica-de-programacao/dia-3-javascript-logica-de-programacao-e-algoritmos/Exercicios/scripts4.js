let primao = 0
for(let i = 1; i <= 50; i++){
    let isprimo = true
    for(let divisor = 2; divisor < i; divisor++){
        if(i % divisor === 0){
            isprimo = false
        }
    }
    if(isprimo){
        primao = i
    }
}
console.log(primao)