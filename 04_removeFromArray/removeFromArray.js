const removeFromArray = function(array) {
    let index;
    let args = Array.from(arguments);
    args.shift();
    for (i = 0; i < args.length; i++) {
        if (array.indexOf(args[i]) > -1) {
            index = array.indexOf(args[i]);
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
