const repeatString = function(word, num) {
    if (num < 0)
        return "ERROR";
    
    let string = "";
    let i;
    for (i=0; i<num; i++) {
        string = string + word;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
