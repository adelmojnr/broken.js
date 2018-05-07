const crypto = require('crypto')
const rf = require('./read')

exports.encrypt = (password, iv, fileSource, fileOutput) => {

    const value = rf.read(fileSource)

    let cipher = crypto.createCipheriv('aes-256-cbc', new Buffer(password), new Buffer(iv))

    let encrypted = Buffer.concat([
            cipher.update(value),
        cipher.final()
    ])

    const f = rf.write(fileOutput, encrypted)
    return f
}

exports.decrypt = (password, iv, fileSource, fileOutput) => {
    const value =  rf.read(fileSource)

    const cipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(password), new Buffer(iv))

    const decrypted = Buffer.concat([
        cipher.update(value),
        cipher.final()
    ])

    const f = rf.write(fileOutput, decrypted)
    return f
}


