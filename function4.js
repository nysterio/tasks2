/**
 * Created by Анастасия on 06.07.2017.
 */
function filter(arr, func) {
    var arrResult = [];
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        if(func(arr[i])) {
            arrResult.push(arr[i]);
        }
    }

    return arrResult;
}

function inBetween(a, b) {
    return function(value) {
        return value >= a && value <= b;
    }
}

function inArray(arr) {
    return function(value) {
        var foundElement = arr.find(function(element) {return value === element;}); // element - текущий обрабатываемый элемент массива arr, value - значение, которое передаем
        return (foundElement != undefined);
    }
}

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, function(a) {return a % 2 == 0;})); // 2, 4, 6
console.log(filter(arr, inBetween(3, 6))); // 3, 4, 5, 6
console.log(filter(arr, inArray([1, 2, 10]))); // 1,2
