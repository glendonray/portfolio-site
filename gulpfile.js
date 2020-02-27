const gulp = require('gulp');
const sass = require('gulp-sass');

function css() {
  return (
    gulp
      .src('./src/styles/App.scss')
      .pipe(sass()) // Using gulp-sass
      //.pipe(gulp.dest('../css'));
      .pipe(gulp.dest('./src/'))
  );
}

function watchFiles() {
  gulp.watch('./src/styles/*.scss', css);
}

const build = gulp.series(gulp.parallel(css));
const watch = gulp.parallel(watchFiles);

exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = build;
