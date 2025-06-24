const palindromes = function (s) {
    let tmp = s.toLowerCase();
    tmp = tmp.replace(/[^a-z0-9]/g, "");
    return tmp === tmp.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
