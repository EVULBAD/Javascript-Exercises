const fibonacci = function(num) {
    let term1 = 1,
        term2 = 1,
        result = 0;
    if (num < 0) {
        return "OOPS";
    } else if (num <= 2) {
        return 1;
    } else {
        for (i = 0; i < num - 2; i++) {
            result = term1 + term2;
            term2 = term1;
            term1 = result;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = fibonacci;
