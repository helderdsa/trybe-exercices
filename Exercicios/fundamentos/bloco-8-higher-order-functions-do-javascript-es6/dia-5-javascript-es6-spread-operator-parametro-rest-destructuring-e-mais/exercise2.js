const sum = (...nums) => nums.reduce((acc, curr) =>  acc+curr, 0)
console.log(sum(1,5,8,9,6,3));
console.log(sum(1,2,3,4,5,6,7,8,9));