/**
 * Created by Анастасия on 06.07.2017.
 */
function sum(a) {
    return function(b) {
        return a + b; // возьмет a из внешнего LexicalEnvironment
    }
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4