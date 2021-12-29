const fibonacci = function(num) {
    let converted = parseInt(num)
    let fibArray = [1,1];//create an array of fib numbers
    let output = 'OOPS';
    if (converted>0) {
        for(i=2; i<converted; i++){
            fibArray.push(fibArray[i-1]+fibArray[i-2]);
        };
        output = fibArray[converted-1];
    }

    return (output);
};

// Do not edit below this line
module.exports = fibonacci;
