var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

var PathTo = {
  SassFiles: './sass/**/*.scss',
  PublicFolder: './public',
  PublicCss: './public/css',
  PublicCssFiles: './public/css/*.css'
};

gulp.task('watch-files', function (){
  gulp.watch(PathTo.SassFiles, ['compile-sass']);
  gulp.watch(PathTo.PublicCssFiles, ['html']);
});

gulp.task('compile-sass', function (){
  return gulp
      .src(PathTo.SassFiles)
      .pipe(sass({
        // errLogToConsole: true,
        sourceComments: true,
        includePaths: ['bower_components/foundation/scss']
      }).on('error', sass.logError))
      .pipe(gulp.dest('./public/css'));
});

gulp.task('html', function (){
  return gulp.src('./public/index.html')
    .pipe(connect.reload());
});

gulp.task('public-server', function (){
  connect.server({
    root: './public',
    port: 8080,
    livereload: true
  });
});

gulp.task('default', ['public-server', 'compile-sass', 'watch-files']);
