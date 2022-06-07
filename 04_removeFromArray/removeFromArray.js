const removeFromArray = function(...args) {
    let arr = args[0];
    for(var i = 1; i < args.length; i++){
        if (!arr.includes(args[i])) {
            continue
        }

        var index = arr.indexOf(args[i]);
        if (index > -1) {
          arr.splice(index, 1);
        }      
    }
    return arr
};


// Do not edit below this line
module.exports = removeFromArray;