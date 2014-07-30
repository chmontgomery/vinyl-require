# vinyl-require

> Like calling node's [`require`](http://nodejs.org/api/globals.html#globals_require), but takes a [vinyl file](https://github.com/wearefractal/vinyl)

## Usage

```js
var vinylRequire = require('vinyl-require');

var aFile = new File({
  cwd: "/",
  base: "/test/",
  path: "/test/file.js",
  contents: new Buffer("module.exports = { test: 1 }")
});

var resolvedFile = vinylRequire(aFile);
console.log(resolvedFile.test) // 1
```

[MIT](http://opensource.org/licenses/MIT) © [Chris Montgomery](http://www.chrismontgomery.info/)