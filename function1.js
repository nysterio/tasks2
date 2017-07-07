/**
 * Created by Анастасия on 06.07.2017.
 */
function sum() {
    var sum = 0;
    var length = arguments.length;
    for (var i = 0; i < length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log(sum()); // 0
console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2 ,3)); // 6
console.log(sum(1, 2, 3, 4)); // 10