const fs =require('fs')

const add = function(oldNote=[], newNote)
 {
    let note = JSON.parse(oldNote);

    note.push(newNote);
    fs.writeFileSync('Note.txt', JSON.stringify(note));
}

module.exports = add

