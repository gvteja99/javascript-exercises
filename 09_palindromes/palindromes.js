const palindromes = function (str) {
    str = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    reverse_str = str.split("").reverse().join("");
    return str === reverse_str
};

// Do not edit below this line
module.exports = palindromes;
