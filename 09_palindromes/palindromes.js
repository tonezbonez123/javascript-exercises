const palindromes = function (str) {
    let newString = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); // remove punctuation
    let finalString = newString.replace(/\s+/g, '');
    const palindromeArray = finalString.split(''); // create an array to check to see if the index === -(index+1)
    const reversed = palindromeArray.slice().reverse();
    let outputStringOne = palindromeArray.join("");
    let outputStringTwo = reversed.join("");
    console.log(outputStringOne);
    console.log(outputStringTwo);
    return (outputStringOne == outputStringTwo);
    
    
    

};

// Do not edit below this line
module.exports = palindromes;
