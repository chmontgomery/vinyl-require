# vinyl-require [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> Like calling node's [`require`](http://nodejs.org/api/globals.html#globals_require), but takes a [vinyl file](https://github.com/wearefractal/vinyl)

## Usage

```js
var vinylRequire = require('vinyl-require');

var aFile = new File({
  cwd: "/",
  base: "/test/",
  path: "/test/file.js",
  contents: new Buffer("module.exports = { test: 'yo' }")
});

var resolvedFile = vinylRequire(aFile);
console.log(resolvedFile.test) // yo
```

[MIT](http://opensource.org/licenses/MIT) © [Chris Montgomery](http://www.chrismontgomery.info/)

[npm-url]: https://npmjs.org/package/vinyl-require
[npm-image]: http://img.shields.io/npm/v/vinyl-require.svg
[travis-image]: https://travis-ci.org/chmontgomery/vinyl-require.svg?branch=master
[travis-url]: https://travis-ci.org/chmontgomery/vinyl-require