function countElement(number, value) {
    var count = 0;
    for (var i = 0; i < number.length; i++) {
        if (number[i] == value) {
            count++;
        }
    }
    return count;
}
var numbers = [1, 2, 3, 5, 6, 6, 8, 9];
var value = 6;
var count = countElement(numbers, value);
console.log("ph\u1EA7n  t\u1EED ".concat(value, " xu\u1EA5t hi\u1EC7n ").concat(count, " l\u1EA7n"));
