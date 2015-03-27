

'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var less = require('gulp-less');
var path = require('path');
var runSequence = require('run-sequence');
var ngAnnotate = require('gulp-ng-annotate');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

// load plugins
var $ = require('gulp-load-plugins')();

//config
var path = {
    public:'./public'
};

//ng-annotate
gulp.task('ngannotate', function () {
    return gulp.src(path.public+'/js/main.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('dist'));
});

gulp.task('less', function() {
    gulp.src(path.public+'/css/less/style.less')
        .pipe(less({compress: true}))
        .pipe(rename('style.css'))
        .pipe(gulp.dest(path.public+'/css/'))
        .pipe(reload({stream:true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        notify: true,
        port: 3000,
        proxy: "localhost:3009"
    });
});


/********************
 *
 * Desenvolvimento
 *
 ********************/

gulp.task('serve', function() {
    //runSequence('less', 'browser-sync');
    runSequence('browser-sync');
    gulp.watch([path.public+'/**/*.html'], reload);
    gulp.watch([path.public+'/layout/**/*.html'], reload);
    gulp.watch([path.public+'/partials/**/*.html'], reload);
    gulp.watch([path.public+'/js/**/*.js'], reload);
    //gulp.watch(['Content/less/*.less'], ['less']);
    gulp.watch(['bower.json'], ['bower']);
});