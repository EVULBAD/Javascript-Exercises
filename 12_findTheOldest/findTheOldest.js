const findTheOldest = function(people) {
    let oldest = "",
        birth = 0,
        death = 0,
        oldestAge = 0;
        age = 0,
        personName = "",
        currentYear = new Date().getFullYear();
    for (var x of people) {
        personName = x.name;
        birth = x.yearOfBirth;
        if (x.yearOfDeath == undefined) {
            age = currentYear - birth;
        } else { 
            death = x.yearOfDeath;
            age = death - birth;
        }
        if (age > oldestAge) {
            oldestAge = age;
            oldest = x;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
