var term = require('terminal-kit').terminal;

function terminate() {
    term.grabInput(false);
    setTimeout(function () { process.exit() }, 100);
}

term.bold.cyan('Type anything on the keyboard...\n');
term.green('Hit CTRL-C to quit.\n\n');

term.grabInput({ mouse: 'button' });

term.on('key', function (name, matches, data) {
    console.log("'key' event:", name);
    if (name === 'CTRL_C') { terminate(); }
});

// let i = 0
// const counter = (i, resolve, reject) => {
//     console.log("pending");
//     setTimeout(() => resolve(i), 2000)
// }

// while (i < 10) {

//     // console.log("----");
//     // term.on('key', function (name, matches, data) {
//     //     pReset.Draw()
//     //     console.log("'key' event:", name);
//     //     if (name === 'CTRL_C') { terminate(); }
//     // });
//     // setTimeout(()=>{console.log("&&")}, 3000)
//     counter(i, (i) => {console.log(i); }, () => { })
//     i++
// }

// const getVisa = (document, response, reject) => {
//     console.log("Pending visa...")
//     setTimeout(() => {
//         Math.random() > .5 ? response(document) : reject()
//     }, 2000)
// }

// const gotDoc = (document) => {
//     console.log(document.id)
// }

// const notGotDoc = () => {
//     console.log("You didn't get document")
// }

// getVisa({ id: "document" }, gotDoc, notGotDoc)