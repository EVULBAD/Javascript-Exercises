const getTheTitles = function(books) {
    let titles = [];
    for (var x of books) {
        titles.push(x.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
