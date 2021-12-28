function repeatString(phrase, num) {
    let phraseInside = phrase;
    let output = '';
    if (num < 0){
        output += 'ERROR'
    } else {   
        for (i = 0; i < num; i++){
            output += phraseInside;
        }
    }
    return output


};

// Do not edit below this line
module.exports = repeatString;
