const sumAll = function(a, b) {
    if (
        typeof a !== 'number' || 
        typeof b !== 'number' || 
        !Number.isInteger(a) || 
        !Number.isInteger(b) || 
        a < 0 || b < 0
    ) {
        return "ERROR";
    }
    if(a > b) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    let res = 0;
    for (let i = a; i < b + 1; i++) {
        res = res + i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
