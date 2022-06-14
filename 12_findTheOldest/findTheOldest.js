const findTheOldest = function(obj) {
    curr_year = new Date().getFullYear()

    function compare(a, b) {
        deathYearA = a['yearOfDeath']||curr_year;
        deathYearB = b['yearOfDeath']||curr_year;
        return (deathYearA - a['yearOfBirth'] <  deathYearB - b['yearOfBirth'])?1:-1
    }
    
    return obj.sort((a, b) => compare(a, b))[0]
};

// Do not edit below this line
module.exports = findTheOldest;
