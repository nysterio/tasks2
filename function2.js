/**
 * Created by Анастасия on 06.07.2017.
 */
function myConcat(separator) {
    var stringResult = "";
    var length = arguments.length;
    for (var i = 1; i < length; i++) {
        stringResult += arguments[i] + separator;
    }

    return stringResult;
}

// returns "red, orange, blue, "
console.log(myConcat(", ", "red", "orange", "blue"));
// returns "elephant; giraffe; lion; cheetah; "
console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// returns "sage. basil. oregano. pepper. parsley. "
console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
