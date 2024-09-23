const sumAll = function(num1, num2) {
    let i, sum = 0;
    let temp;
    if (num1 > num2) {
        temp = num2;
        num2 = num1;
        num1 = temp;
    }

    if (num1 < 0 || num2 < 0)
        return "ERROR";

    if (!Number.isInteger(num1) || !Number.isInteger(num2))
        return "ERROR";

    for (i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
