function arrayOfNumbers(vector){
    console.log("AEEEEEH");
    let pares = [];
    for(item of vector){
        for(num of item){
            if(num%2==0){
                pares.push(num);
            };
        };
    };
    console.log(pares);
};
arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]);