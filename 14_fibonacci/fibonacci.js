const fibonacci = function(a) {
    if (a < 0) return "OOPS";
    a = Number(a);

    let arr = [];
    arr[0] = 0;
    arr[1] = 1;

    for (let i = 2; i <= a; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[a];
};
// Do not edit below this line
module.exports = fibonacci;
