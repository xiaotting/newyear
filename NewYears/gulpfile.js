var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    px2rem = require('gulp-px3rem')

    sass.compiler = require('node-sass')

  gulp.task('connect',function () {
    connect.server({
      root:'src',
      livereload:true,
      port:8881,
      host:'0.0.0.0'
    });
  })
//自动刷新
  gulp.task('load',function(){
    gulp.src('./src/**/*.*')
      .pipe(connect.reload());
  });
  gulp.task('load:watch', function () {
    gulp.watch('./src/**/*.*', ['load']);
  });
  //编译sass文件
  gulp.task('sass',function () {
    return gulp.src('./src/scss/**/*.scss')
      .pipe(sass().on('error',sass.logError))
      .pipe(autoprefixer({
        browsers:['last 2 versions'],
        cascade:false
      }))
      .pipe(px2rem())
      .pipe(gulp.dest('./src/css'))
  });
  gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
  });

  gulp.task('default',['connect','load:watch','sass:watch'])