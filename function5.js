/**
 * Created by Анастасия on 07.07.2017.
 */
function Summator() {
    this.sum = function(a, b) {
        return a + b;
    };
    this.run = function() {
        var a = prompt("Введите а:");
        var b = prompt("Введите b:");
        alert(this.sum(+a, +b));
    }
}

new Summator().run();