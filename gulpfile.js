var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  mocha = require('gulp-mocha');

require('gulp-help')(gulp);

gulp.task('lint', 'Lint all js', function () {
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', { verbose: true }))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', 'Tests', function () {
  return gulp.src('./test.js')
    .pipe(mocha({reporter: 'dot'}));
});

gulp.task('watch', 'Watch files and test on change', function () {
  gulp.watch('./*.js', ['test']);
});

gulp.task('ci', 'Runs all ci validation checks', ['lint', 'test']);