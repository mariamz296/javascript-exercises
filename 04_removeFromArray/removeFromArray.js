const removeFromArray = function(array1, ...args) {
    const newArray = [];
    
    array1.forEach(element => {
        if (!args.includes(element)) {
            newArray.push(element);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
