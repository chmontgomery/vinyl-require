var vinylRequire = require('./index'),
  File = require('vinyl'),
  should = require('should');

describe('index', function () {
  it('should resolve basic node.js file', function () {

    var aFile = new File({
      cwd: "/",
      base: "/test/",
      path: "/test/file.js",
      contents: new Buffer("module.exports = { test: 'yo' }")
    });

    var resolvedFile = vinylRequire(aFile);

    resolvedFile.should.be.type('object');
    resolvedFile.test.should.eql('yo');
  });

  it('should resolve json file', function () {

    var aFile = new File({
      cwd: "/",
      base: "/test/",
      path: "/test/file.json",
      contents: new Buffer('{ "test": "yo" }')
    });

    var resolvedFile = vinylRequire(aFile);

    resolvedFile.should.be.type('object');
    resolvedFile.test.should.eql('yo');
  });

  it('should return null when contents is null', function () {

    var aFile = new File({
      cwd: "/",
      base: "/test/",
      path: "/test/file.js",
      contents: null
    });

    var resolvedFile = vinylRequire(aFile);

    should(resolvedFile).eql(null);
  });

  describe('should throw error', function () {

    it('when file null', function () {
      (function() {
        vinylRequire(null);
      }).should.throw(/^Expected vinyl file but got null/);
    });

    it('when file is unknown extension', function () {
      (function() {
        var aFile = new File({
          cwd: "/",
          base: "/test/",
          path: "/test/file.html",
          contents: new Buffer('<html>yo</html>')
        });
        vinylRequire(aFile);
      }).should.throw(/^Unexpected file extension. Expected .js or .json but got .html/);
    });

  });
});
