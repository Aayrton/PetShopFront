var gulp = require('gulp');
var mocha = require('gulp-mocha');
var babel = require('babel-core/register');
var path = require('path');

gulp.task('mocha', function() {
  return gulp.src([path.resolve('src', 'app', 'test', '**/*.spec.js')], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      compilers: {
        js: babel
      }
    }));
});
