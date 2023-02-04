const reverseString = function(string) {
    let result = string.split('').reverse().toString().replaceAll(',','');
    return result;
};

// Do not edit below this line
module.exports = reverseString;
