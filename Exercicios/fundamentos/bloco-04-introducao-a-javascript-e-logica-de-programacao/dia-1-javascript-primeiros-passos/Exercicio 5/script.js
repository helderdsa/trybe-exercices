// function operacoes(operação, a, b){
//     let result;
//     if(operação === "+"){
//         result = a+b        
//     }else if(operação === "-"){
//         result = a-b
//     }else if(operação === "*"){
//         result = a*b
//     }else if(operação === "/"){
//         result = a/b
//     }else{
//         result = "erro"
//     }
//     console.log(result)
// }
// operacoes("+",5,5)
// operacoes("-",5,5)
// operacoes("*",5,5)
// operacoes("/",5,5)
// operacoes("o",5,5)

// function maiorQxy(a, b){
//     let result;
//     if(a>b){
//         result = a
//     }else{
//         result = b
//     }
//     console.log("entre "+a+" "+b+" o mauior é: "+result)
// }
// maiorQxy(4,8)
// maiorQxy(9,8)
// maiorQxy(1,85)
// maiorQxy(46,78)
// maiorQxy(44,88)

// function maiorQxyz(a, b, c){
//     let result;
//     if(a>b && a>c){
//         result = a
//     }else if(b>a && b>c){
//         result = b
//     }else{
//         result = c
//     }
//     console.log("entre "+a+" "+b+" "+c+" o mauior é: "+result)
// }
// maiorQxyz(854,7891,4186)
// maiorQxyz(546,46,486)
// maiorQxyz(541,486,6801)

// function isPosiNegaZero(x){
//     let result;
//     if(x>0){
//        result = "Positivo" 
//     }else if(x<0){
//         result = "Negativo" 
//     }else{
//         result = "ZEROOOOOOOOOOO" 
//     }
//     console.log(result)
// }
// isPosiNegaZero(1)
// isPosiNegaZero(0)
// isPosiNegaZero(-1)

// function trianguloValido(x,y,z){
//     let result;
//     if(x>0 && y>0 && z>0){
//         if(x+y+z == 180){
//             result = "Os ângulos "+x+"° "+y+"° "+z+"° são válidos para criar um triangulo"
//         }else{
//             result = "Os ângulos são invalidos"
//         }
//     }else{
//         result = "Os ângulos são invalidos"
//     }
//     console.log(result)
// }
// trianguloValido(60,60,60)
// trianguloValido(60,70,50)
// trianguloValido(60,-60,60)
// trianguloValido(60,60,"a")
// trianguloValido(60,60,59)

// function qualMovimento(peca){
//     let movimento;
//     let pecaLC = peca.toLowerCase();
//     if(pecaLC == "peão"){
//         movimento = "1 casa para frente e tem a opção de avançar 2 casas caso seja a primeira jogada com a peça"
//     }else if(pecaLC == "torre"){
//         movimento = "quantas casas quiser pra frente, tras, esquerda, direita"
//     }else if(pecaLC == "cavalo"){
//         movimento = "se move em formato de L"
//     }else if(pecaLC == "bispo"){
//         movimento = "se move nas diagonais"
//     }else if(pecaLC == "rei"){
//         movimento = "1 casa para qualquer direção"
//     }else if(pecaLC == "rainha"){
//         movimento = "quantas casa quiser para qualquer direção"
//     }else{
//         movimento = "peça invalida"
//     }
//     console.log(movimento)
// }
// qualMovimento("peão")
// qualMovimento("PEÃO")
// qualMovimento("torre")
// qualMovimento("Torre")
// qualMovimento("cavalo")
// qualMovimento("cavaLo")
// qualMovimento("bispo")
// qualMovimento("bispO")
// qualMovimento("rei")
// qualMovimento("rEI")
// qualMovimento("rainha")
// qualMovimento("raINHa")

// function avaliar(nota){
//     let notaLetra;
//     if (nota >= 90){
//         notaLetra =  "A"
//     }else if(nota < 90 && nota >= 80){
//         notaLetra = "B"
//     }else if(nota < 80 && nota >= 70){
//         notaLetra = "C"
//     }else if(nota < 70 && nota >= 60){
//         notaLetra = "D"
//     }else if(nota < 60 && nota >= 50){
//         notaLetra = "E"
//     }else{
//         notaLetra = "F"
//     }
//     console.log("a nota foi: "+notaLetra)
// }
// avaliar(95)
// avaliar(85)
// avaliar(75)
// avaliar(65)
// avaliar(55)
// avaliar(45)

// function algumPar(x,y,z){
//     let result;
//     if ((x*y*z)%2 == 0){
//         result = "There is a impostor among us"
//     }else{
//         result = "tudo limpo"
//     }
//     console.log(result)
// }
// algumPar(1,2,3)
// algumPar(2,4,6)
// algumPar(1,3,5)

// function algumImpar(x,y,z){
//     let result;
//     if (x%2 == 0 || y%2 == 0 || z%2 == 0){
//         result = "There is a impostor among us"
//     }else{
//         result = "tudo limpo"
//     }
//     console.log(result)
// }
// algumImpar(2,3,4)
// algumImpar(1,3,5)
// algumImpar(2,4,6)

// function valorProd(valorVenda, valorProd){
//     let custoTotal = valorProd*1.2
//     let lucroUnd = valorVenda-custoTotal
//     if(valorVenda > 0 || valorProd > 0){
//         console.log("Lucro por unidade é: "+lucroUnd+" \nAo vender mil unidades o lucro é: "+lucroUnd*1000)
//     }else{
//         console.log("erro")
//     }
// }
// valorProd(16,10)
// valorProd(15,15)

function calcINSS(slBruto){
    let slINSS
    let slIR
    let slLiquido
    if(slBruto >= 5189.82){
        slINSS = slBruto - 570.88
    }else if(slBruto < 5189.82 && slBruto >= 2594.93){
        slINSS = slBruto*0.89
    }else if(slBruto < 2594.93 && slBruto >= 1556.95){
        slINSS = slBruto*0.91
    }else if(slBruto < 1556.94){
        slINSS = slBruto*0.92   
    }else{
        console.log("erro")
    }
    console.log
    if(slINSS < 1903.98){
        slLiquido = slINSS
    }else if(slINSS > 1903.98 && slINSS <= 2826.65){
        slLiquido = (slINSS*0.925)-124.80
    }else if(slINSS > 2826.65 && slINSS <= 3751.05){
        slLiquido = (slINSS*0.85)-354.80
    }else if(slINSS > 3751.05 && slINSS <= 4664.68){
        slLiquido = (slINSS*0.775)-636.13
    }else if(slINSS > 4664.68){
        slLiquido = (slINSS*0.725)-869.36
    }
    console.log(slLiquido)
}
calcINSS(1000)
calcINSS(2000)
calcINSS(3000)
calcINSS(4000)
calcINSS(5000)
calcINSS(6000)