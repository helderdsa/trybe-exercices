function contaFruta(cestaFrutas){
    let frutas = ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva']
    let cestaDeFruta = [
        'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja', 'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia','Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate','Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva','Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva','Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia','Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia','Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana','Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva','Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca','Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana','Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca','Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva','Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja','Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca','Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca','Banana', 'Pera', 'Abacate', 'Uva',
      ];
    let contador = 0
    let repeticoes = []
    for(fruta of frutas){
        for(frutaDaCesta of cestaDeFruta){
            if(fruta == frutaDaCesta){
                contador++
            }
        }
        repeticoes.push(contador)
        contador = 0    
    }
    console.log("essa cesta tem "+repeticoes[0]+" "+frutas[0]+"s, "+repeticoes[1]+" "+frutas[1]+"s, "+repeticoes[2]+" "+frutas[2]+"s, "+repeticoes[3]+" "+frutas[3]+"s, "+repeticoes[4]+" "+frutas[4]+"s")
}
contaFruta()