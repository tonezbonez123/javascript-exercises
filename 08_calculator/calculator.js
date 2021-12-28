const add = function(...num) {
  let calcSum = 0;
  for (i = 0; i < num.length; i++){
    calcSum += num[i];
    };
  return calcSum;
}

const subtract = function(...num) {
	let calcSum = num[0];
  for (i = 1; i < num.length; i++){
    calcSum -= num[i];
  }
  return calcSum;
};

const sum = function(arraySum) {
  if(arraySum.length == 0){
    return 0;
  }if(arraySum.length > 0){
    let calcSum = 0;
    for (i = 0; i < arraySum.length; i++){
      calcSum += arraySum[i];
      };
    return calcSum;
  }
	
};

const multiply = function(num) {
  let calcSum = num[0];
  for (i = 1; i < num.length; i++){
    calcSum *= num[i];
    };
  return calcSum;

};

const power = function(x,y) {
	powerOutput = x**y;
  return powerOutput;
};

const factorial = function(x) {
  let calcSum = 1;
  if(x===0){
    calcSum = 1;
  } else {
    for (i=1; i<=x; i++){
      calcSum *= i;
    };
  }

  return calcSum;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
