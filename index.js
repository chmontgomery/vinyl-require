var path = require('path'),
  _extensions = {
    JS: '.js',
    JSON: '.json'
  };

module.exports = function (file) {
  var fileExtension;

  if (!file || (typeof file.isBuffer !== 'function')) { // dumb way to do instanceof so this module works when required
    throw new Error('Expected vinyl file but got ' + file);
  }

  fileExtension = path.extname(file.path);

  if (file.isBuffer()) {
    if (fileExtension === _extensions.JS) {
      return requireFromString(file.contents.toString(), file.path);
    }
    else if (fileExtension === _extensions.JSON) {
      // handle .json manually since Module._compile doesn't seem to recognize it
      return JSON.parse(file.contents.toString());
    }
    throw new Error('Unexpected file extension. Expected .js or .json but got ' + fileExtension);
  }
  if (file.isStream()) {
    throw new Error('Streams not supported'); // todo add support
  }
  return null;
};

function requireFromString(src, filename) {
  var Module = module.constructor;
  var m = new Module();
  m.paths = module.paths;
  m._compile(src, filename);
  return m.exports;
}