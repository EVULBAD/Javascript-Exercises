const palindromes = function (string) {
    let punctuation = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
        word = string.toLowerCase().replace(/[,\s]/g,""),
        noPunc = word;
    for (i = 0; i <= word.length; i++) {
        let chr = word[i];
        if (punctuation.indexOf(chr) > -1) {
            noPunc = word.replace(chr,"");
        };
    }
    let result = noPunc.split("").reverse().toString().replaceAll(",","");
    if (result == noPunc) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
