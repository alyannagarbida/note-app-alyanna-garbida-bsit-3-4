const add = require('./add')
const read = require('./read')

const cmd = process.argv

if (cmd [2]==="add") {

    let id = cmd [3];
    let title = cmd [4];
    let body = cmd [5];

    note = {
        id,
        title,
        body
    }
let oldNote = read()
// ADD THIS NOTE TO TASK.TXT
add(oldNote, note);
}

if (cmd[2]==='read') {
    console.log (newNote);
}

