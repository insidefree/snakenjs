var term = require("terminal-kit").terminal;
var Snake = (function () {
    function Snake(name) {
        this.name = name;
        this.x1 = 1;
        this.y1 = 3;
        this.symb = "*";
        this.name = name;
    }
    Snake.prototype.getName = function () {
        return this.name;
    };
    Snake.prototype.setName = function (name) {
        this.name = name;
    };
    return Snake;
}());
var snake = new Snake("bench");
// term.moveTo(snake.x1, snake.y1)
// term.bold( 'bold' ) ;
term('Hello world!\n');
term.red('red');
term.moveTo(0, 0);
term.blue('blue');
console.log(snake.getName());
