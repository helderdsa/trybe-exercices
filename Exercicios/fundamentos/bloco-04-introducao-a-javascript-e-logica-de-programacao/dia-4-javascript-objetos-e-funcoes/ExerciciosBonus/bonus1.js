function romaNum(algarismoRomano){
    let primeiro = algarismoRomano[0];
    let segundo = algarismoRomano[1];
    if(primeiro == 'I'){
        primeiro = 1
    }else if(primeiro == 'V'){
        primeiro = 5
    }else if(primeiro == 'X'){
        primeiro = 10
    }else if(primeiro == 'L'){
        primeiro = 50
    }else if(primeiro == 'C'){
        primeiro = 100
    }else if(primeiro == 'D'){
        primeiro = 500
    }else if(primeiro == 'M'){
        primeiro = 1000
    }else{
        console.log('não é numero');
    }

    if(segundo == 'I'){
        segundo = 1
    }else if(segundo == 'V'){
        segundo = 5
    }else if(segundo == 'X'){
        segundo = 10
    }else if(segundo == 'L'){
        segundo = 50
    }else if(segundo == 'C'){
        segundo = 100
    }else if(segundo == 'D'){
        segundo = 500
    }else if(segundo == 'M'){
        segundo = 1000
    }else{
        segundo = 0
    }

    if(primeiro<segundo){
        primeiro = -(primeiro)
    }
    console.log(primeiro+segundo);
}
romaNum('I')
romaNum('IV')
romaNum('IX')
romaNum('X')
romaNum('XL')
romaNum('L')
romaNum('XC')
romaNum('C')
romaNum('CD')