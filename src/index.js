module.exports = function reverse(n) {
    let str = String(n);
    let arr = Array.from(str);
    arr.reverse();
    let strReversed = arr.join("");
    let result = parseInt(strReversed);
    return result;
};

