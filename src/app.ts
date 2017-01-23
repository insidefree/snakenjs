const term = require('terminal-kit').terminal
import { Snake } from './snake'

let s1 = new Snake(5, 5, "*")
let s2 = new Snake(10, 10, '#')

//term.moveTo.red(1,1, "*")
term.clear()
s1.Draw()
s2.Draw()