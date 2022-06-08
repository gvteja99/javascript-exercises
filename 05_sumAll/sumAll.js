const sumAll = function(x, y) {
    if (!(Number.isInteger(x) && Number.isInteger(y)) || (x<0||y<0)) {
        return "ERROR"
    }

    if (x>y) {
        y = [x, x = y][0];
    }

    x = x*(x-1)/2
    y = y*(y+1)/2

    return y-x    
};

// Do not edit below this line
module.exports = sumAll;
