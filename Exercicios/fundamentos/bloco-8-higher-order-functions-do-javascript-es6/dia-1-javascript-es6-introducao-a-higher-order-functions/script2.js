const sorteiaNum = () => {
    return Math.floor((Math.random()*5)+1)
}
const validaSorteio = (numeroDaSorte, func) => {
    return (numeroDaSorte === func()) ? 'Parabéns você ganhou' : 'não foi dessa vez'
}
console.log(validaSorteio(5, sorteiaNum));