const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    }
    const arr = [];
    for(let i = 0; i < num; i++) {
        arr[i] = str;
    }
    res = arr.join("");
    return res;
};

// Do not edit below this line
module.exports = repeatString;
