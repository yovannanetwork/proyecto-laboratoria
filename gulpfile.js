var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');


gulp.task('script', function(cb){
	// tarea script
	return gulp.('.node_modules/jquery/dist/jquery.js').pipe(gulp.dest('./js'));
});

gulp.task('style', function() {
	// tarea style
	return gulp.('.node_modules/bootstrap/dist/css/bootstrap.min.css').pipe(gulp.dest('./css'));
});

gulp.task('images', function() {
	// tarea images
});


gulp.task('default', ['images', 'style', 'script']);

