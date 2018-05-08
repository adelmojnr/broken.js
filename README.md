# How to use?

```bash
$ npm i brokenjs
```
For encrypting data:

```javascript
const broken = require('brokenjs')

broken.encrypt('test_encrypt_music_with_brokenjs',
               'broken_js_teste1',
               'music.mp3',
               'encrypted.mp3')
```
## Docs

### .encrypt(password, iv, fileSource, fileOutput)

**Parameter:** `password` **Type:** `String` **Ex:** `test_encrypt_music_with_brokenjs`
**Parameter:** `iv` **Type:** `String` **Ex:** `broken_js_teste1`
**Parameter:** `fileSource` **Type:** `String` **Ex:** `music.mp3`
**Parameter:** `fileOutput` **Type:**` String` **Ex:** `encrypted.mp3`

For decrypting data:

```javascript
const broken = require('brokenjs')

broken.decrypt('test_encrypt_music_with_brokenjs',
               'broken_js_teste1',
               'encrypted.mp3',
               'music.mp3')
```
## Docs

### .decrypt(password, iv, fileSource, fileOutput)

**Parameter:** `password` **Type:** ``String`` **Ex:** `test_encrypt_music_with_brokenjs`
**Parameter:** `iv` **Type:** `String` **Ex:** `broken_js_teste1`
**Parameter:** `fileSource` **Type:** `String` **Ex:** `encrypted.mp3`
**Parameter:** `fileOutput` **Type:** `String` **Ex:** `music.mp3`


