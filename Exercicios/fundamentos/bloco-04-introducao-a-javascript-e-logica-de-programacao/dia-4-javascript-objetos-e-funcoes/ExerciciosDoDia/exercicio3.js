function isPalindromo(palavra){
    palavraContratio = ""
    for(letra of palavra){
        palavraContratio += letra
    }
    if(palavra == palavraContratio){
        console.log("é palindromo")
    }else{
        console.log("não é palindromo")
    }
}
isPalindromo('arara')