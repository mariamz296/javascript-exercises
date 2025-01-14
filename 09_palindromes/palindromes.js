const palindromes = function (string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';

    function hasCharacter(char) {
        return alphabet.includes(char); 
    }

    const newString = string.toLowerCase().split('').filter(hasCharacter).join('');

    const reverseString = newString.split('').reverse().join('');

    return newString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
