let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//1
// for(number of numbers){
//     console.log(number)
// }
//2
// var soma = 0;
// for(let i = 0; i < numbers.length; i++){
//     soma += numbers[i];
// };
// console.log(soma);
// //3
// var soma = 0;
// for(let i = 0; i < numbers.length; i++){
//     soma += numbers[i];
// };
// console.log(soma/numbers.length);
// //4
// var soma = 0;
// for(let i = 0; i < numbers.length; i++){
//     soma += numbers[i];
// };
// if(soma/numbers.length > 20){
//     console.log("maior que 20")
// }else{
//     console.log("menor que 20")
// }
// 5
let numbersMaior = [0];
for(let i = 0; i< numbers.length; i++){
    if(numbersMaior[0]<numbers[i]){
        numbersMaior[0]=numbers[i]
    }
}
console.log(numbersMaior)
// 6
// let numbersImpar = [];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i]%2 != 0){
//         numbersImpar.push(numbers[i])
//     }
// }
// console.log(numbersImpar)
//  7
// let numbersMenor = [0];
// for(let i = 0; i< numbers.length; i++){
//     if(numbers[0]>numbers[i]){
//         numbersMenor[0]=numbers[i]
//     }
// }
// console.log(numbersMenor)
// 8
// let arreiVC = []
// for(let i = 1; i <= 25; i++){
//     arreiVC.push(i)
// }
// console.log(arreiVC)
// 9
let arreiVCPorDois = []
for(let i = 1; i <= 25; i++){
    arreiVCPorDois.push(i/2)
}
console.log(arreiVCPorDois)