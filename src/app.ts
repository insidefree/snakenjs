let term = require("terminal-kit").terminal
//import {terminal} from "terminal-kit"
interface ISnake {

}

class Snake {
    public x1 = 1
    public y1 = 3
    public symb = "*"
    constructor(public name: string) {
        this.name = name
    }

    public getName() {
        return this.name
    }

    public setName(name: string) {
        this.name = name
    }
}

let snake = new Snake("bench")
// term.moveTo(snake.x1, snake.y1)
// term.bold( 'bold' ) ;
 

term('Hello world!\n')
term.red( 'red' )
term.moveTo(0, 0)
term.blue( 'blue' )
console.log(snake.getName())