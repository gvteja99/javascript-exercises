const fibonacci = function(n) {

    if (n<0) {
        return "OOPS";
    } else if (n<3) {
        return 1;
    }

    if (typeof(n)==='string') {
        n = +n;
    }

    let a = b = 1;
    for (i=0; i<n-2; i++) {
        let temp = a+b;
        a = b;
        b = temp;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
