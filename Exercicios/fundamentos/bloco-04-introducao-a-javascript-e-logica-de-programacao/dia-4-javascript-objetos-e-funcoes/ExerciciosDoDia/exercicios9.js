function finalIgual(word, ending){
    let str1 = ending.length
    let str2 = word.substr(-str1)
    if(ending === str2){
        return true
    }else{
        return false
    }
}
console.log(finalIgual("trybe", "be"))