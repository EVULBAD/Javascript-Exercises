const sumAll = function() {
    let sum = 0;
    let maximum;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] < 0 || (typeof arguments[i] !== 'number')) {
            return 'ERROR';
        }
    }
    if (arguments[0] > arguments[1]) {
        maximum = arguments[0];
    } else {
        maximum = arguments[1];
    }
    for (i = 0; i <= maximum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
