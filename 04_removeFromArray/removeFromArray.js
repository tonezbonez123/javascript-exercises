function removeFromArray(listArray, ...num) {
    for (j=0; j<num.length; j++){
        let checkNum = num[j]        
        for (i=0; i<listArray.length; i++){
            if(listArray[i] === checkNum){
                listArray.splice(i, 1);
            } else{
                continue;
            }
        }
    }
    return listArray;
};

// Do not edit below this line
module.exports = removeFromArray;
