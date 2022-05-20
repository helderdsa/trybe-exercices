const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObj = ([modelo, marca, ano]) => ({
    modelo,
    marca,
    ano,
})
console.log(toObj(palio));
console.log(toObj(shelbyCobra));
console.log(toObj(chiron));