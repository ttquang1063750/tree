var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

/*
 *=========================
 *       WATCH CONFIG
 *=========================
 */
var app = "./app";
var scriptDirectories = "./app/**/*.js";
var styleDirectories = "./app/**/*.scss";
var templateDirectories = "./app/components/**/*.html";
var destinationDirectories = "./";

gulp.task("template", function () {
  gulp
      .src(templateDirectories)
      .pipe(templateCache({
        standalone:true
      }))
      .pipe(gulp.dest(app))
      .on('end', function () {
        console.log("Task: build html templates success");
      })
      .on('error', function() {
        console.log(arguments);
      });
});


gulp.task("script", ['template'], function () {
  gulp
      .src(scriptDirectories)
      .pipe(uglify())
      .pipe(concat('app.min.js'))
      .pipe(gulp.dest(destinationDirectories))
      .on('end', function () {
        console.log("Task: build script success");
      })
      .on('error', function() {
        console.log(arguments);
      });
});


gulp.task("style", function () {
  gulp
      .src(styleDirectories)
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(minifyCss({
        keepSpecialComments: 0
      }))
      .pipe(concat('app.min.css'))
      .pipe(gulp.dest(destinationDirectories))
      .on('end', function () {
        console.log("Task: build scss success");
      })
      .on('error', function() {
        console.log(arguments);
      });
});

gulp.task('watch', function () {
  gulp.watch([scriptDirectories, templateDirectories], ['script']);
  gulp.watch(styleDirectories, ['style']);
});



gulp.task('default', ['script', 'style']);
