var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var minifyCss = require('gulp-minify-css');

gulp.task('default', ['scripts', 'styles', 'inject']);

/*
 * SCRIPTS
 */

gulp.task('scripts', [
    'scripts.packages',
    'scripts.app.modules',
    'scripts.app'
]);

gulp.task('scripts.app', function () {
    gulp.src([
        'client/scripts/**/*.js',
        '!client/scripts/**/*.module.js'])
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('wwwroot/scripts'));
});

gulp.task('scripts.app.modules', function () {
    gulp.src('client/scripts/**/*.module.js')
        .pipe(uglify())
        .pipe(concat('app.modules.js'))
        .pipe(gulp.dest('wwwroot/scripts'));
});

gulp.task('scripts.packages', function () {
    gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/angular/angular.js',
        'node_modules/angular-animate/angular-animate.js',
    ])
        .pipe(uglify())
        .pipe(concat('packages.js'))
        .pipe(gulp.dest('wwwroot/scripts'));
});

/*
 * STYLES
 */

gulp.task('styles', [
    'styles.packages',
    'styles.app',
]);

gulp.task('styles.packages', function () {
    gulp.src([
        'node_modules\bootstrap\dist\css\bootstrap.css',
    ])
        .pipe(minifyCss())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('wwwroot/styles'));
});

gulp.task('styles.app', function () {
    gulp.src([
        'client/styles/**/*.css',
    ])
        .pipe(minifyCss())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('wwwroot/styles'));
});

/*
 * INJECT
 */

gulp.task('inject', function () {
    var target = gulp.src('Views/App.cshtml');

    var sources = gulp.src([
        'wwwroot/scripts/*.js',
        'wwwroot/styles/*.css'
    ],
    {
        read: false
    });

    return target.pipe(inject(sources))
      .pipe(gulp.dest('Views/'));
});