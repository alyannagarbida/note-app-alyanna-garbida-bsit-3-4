const fs =require('fs');

const write = function(data = 'nothing') {
    fs.writeFileSync('task.txt', data)
}
 module.exports = write;