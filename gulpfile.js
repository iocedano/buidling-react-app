"use strict";

const gulp = require('gulp');
const gulpConnect = require('gulp-connect'); //Run a local dev server
const gulpOpen = require('gulp-open'); // Open URL in web browser
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const babelify = require('babelify');


const config = {
  post: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    dist: './dist',
    js: './src/**/*.js',
    images: './src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
    mainJs: './src/main.js'
  }
}

gulp.task('connect', function() {
  gulpConnect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html').pipe(gulpOpen({
      uri: config.devBaseUrl + ':' + config.port + '/'
  }));
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(gulpConnect.reload());
});

gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bunlde.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(gulpConnect.reload());
});

gulp.task('css', function() {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function() {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(gulpConnect.reload());
});

gulp.task('eslint', function() {
  return gulp.src(config.paths.js)
    .pipe(eslint({config: 'eslintrc.json'}))
    .pipe(eslint.format());
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js', 'eslint']);
});

gulp.task('default', ['html', 'js', 'css', 'images', 'eslint', 'open', 'watch']);
