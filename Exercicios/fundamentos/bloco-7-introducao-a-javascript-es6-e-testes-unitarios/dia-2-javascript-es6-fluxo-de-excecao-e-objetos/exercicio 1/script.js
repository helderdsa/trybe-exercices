// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2, 3));

// console.log(sum(2, '3'));

// const sumMelhor = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//         return 'Os valores devem ser numéricos';
//     }
//     return value1 + value2;
// };

// console.log(sumMelhor(2, 3));

// console.log(sumMelhor(2, '3'));

// const sumThrow = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };

// console.log(sumThrow(2, 3));

// console.log(sumThrow(2, '3'));

const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error('Os valores devem ser numéricos');
    }
};

const sumFinal = (value1, value2) => {
    try {
        verifyIsNumber(value1, value2);
        return value1 + value2;
    } catch (error) {
        throw error.message;
    }
};

console.log(sumFinal(2, 3));

console.log(sumFinal(2, '3'));