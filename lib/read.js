const fs = require('fs')

exports.read = (file) => {
    return fs.readFileSync(file)
}

exports.write = (fileName, file) => {
    return fs.writeFileSync(fileName, file)
}
