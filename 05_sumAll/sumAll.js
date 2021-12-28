const sumAll = function(x,y) {
    let sum = 0;
    if ((y<0)||(x<0)||(!Number.isInteger(x))||(!Number.isInteger(y))){
        sum = 'ERROR';
    } else if (y>x) {
        for (i = x; i <= y; i++){
            sum += i;
        }
    } else {
        for (i = y; i<= x; i++){
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
