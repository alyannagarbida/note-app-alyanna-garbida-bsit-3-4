const fs =require('fs');
const read =function() {
    if(fs.existsSync('./task.txt')) {
        return fs.readFileSync('./task.txt', 'utf8');
    }
  else{
    return '[]'
  }
  }

module.exports = read