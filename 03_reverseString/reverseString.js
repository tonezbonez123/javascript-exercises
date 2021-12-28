const reverseString = function(str) {
    let array = str.split(''); //string to array for every character
    let reversed = array.reverse()//reverse the array
    
    //array to string
    let newString = '';
    for (i = 0; i < str.length; i++){
        newString += reversed[i];
    }
    return newString;
};


// Do not edit below this line
module.exports = reverseString;
