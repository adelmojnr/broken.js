const crypto = require('crypto')
const rf = require('./read')

const toggleEncryption = (options, encrypt) => {
  const { password, iv, fileSource, fileOutput } = options
  const value = rf.read(fileSource)
  const cipher = encrypt
    ? crypto.createCipheriv('aes-256-cbc', new Buffer(password), new Buffer(iv))
    : crypto.createDecipheriv('aes-256-cbc', new Buffer(password), new Buffer(iv))

  const parsed = Buffer.concat([
    cipher.update(value),
    cipher.final(),
  ])

  const file = rf.write(fileOutput, parsed)

  return file
}

exports.encrypt = (password, iv, fileSource, fileOutput) => toggleEncryption({password, iv, fileSource, fileOutput}, true)
exports.decrypt = (password, iv, fileSource, fileOutput) => toggleEncryption({password, iv, fileSource, fileOutput}, false)
