## How to use?

```bash
$ npm i broken.js
```
For encrypting data:

```javascript
const broken = require('broken.js')

broken.encrypt('test_encrypt_music_with_brokenjs',
               'broken_js_teste1',
               'music.mp3',
               'encrypted.mp3')
```
For decrypting data:

```javascript
const broken = require('broken.js')

broken.decrypt('test_encrypt_music_with_brokenjs',
               'broken_js_teste1',
               'music.mp3',
               'encrypted.mp3')
```

