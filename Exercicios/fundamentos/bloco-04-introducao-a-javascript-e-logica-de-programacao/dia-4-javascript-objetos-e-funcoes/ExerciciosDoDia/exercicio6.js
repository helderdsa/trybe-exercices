function maiorNome(nomes){
    let nomeAtual = '';
    for(i of nomes){
        if(nomeAtual.length < i.length)
        nomeAtual = i
    };
    console.log(nomeAtual) ; 
};
maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])