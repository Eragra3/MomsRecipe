var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');

gulp.task('default', ['scripts', 'styles', 'inject']);

/*
 * SCRIPTS
 */

gulp.task('scripts', [
    'scripts.cleanup',
    'scripts.packages',
    'scripts.app.modules',
    'scripts.app'
]);

gulp.task('scripts.cleanup', function () {
    return gulp
        .src('wwwroot/scripts', { read: false })
        .pipe(clean());
});

gulp.task('scripts.app', ['scripts.cleanup'], function () {
    return gulp
        .src([
            'client/scripts/**/*.js',
            '!client/scripts/**/*.module.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('wwwroot/scripts'));
});

gulp.task('scripts.app.modules', ['scripts.cleanup'], function () {
    return gulp.src('client/scripts/**/*.module.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('modules.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('wwwroot/scripts'));
});

gulp.task('scripts.packages', ['scripts.cleanup'], function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-ui-notification/dist/angular-ui-notification.min.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('packages.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('wwwroot/scripts'));
});

/*
 * STYLES
 */

gulp.task('styles', [
    'styles.cleanup',
    'styles.packages',
    'styles.app'
]);

gulp.task('styles.cleanup', function () {
    return gulp
        .src('wwwroot/styles', { read: false })
        .pipe(clean());
});

gulp.task('styles.packages', ['styles.cleanup'], function () {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/angular-ui-notification/dist/angular-ui-notification.min.css'
    ])
        .pipe(minifyCss())
        .pipe(concat('packages.css'))
        .pipe(gulp.dest('wwwroot/styles'));
});

gulp.task('styles.app', ['styles.cleanup'], function () {
    return gulp.src([
        'client/styles/**/*.css'
    ])
        .pipe(minifyCss())
        //.pipe(concat('app.css'))
        .pipe(gulp.dest('wwwroot/styles'));
});

/*
 * INJECT
 */

gulp.task('inject', ['scripts', 'styles'], function () {
    var target = gulp.src('Views/Home/Index.cshtml');

    var sources = gulp.src([
        'wwwroot/scripts/packages.js',
        'wwwroot/scripts/modules.js',
        'wwwroot/scripts/app.js',
        'wwwroot/styles/**'
    ], { read: false });

    return target
        .pipe(inject(sources, { ignorePath: 'wwwroot/' }))
        .pipe(gulp.dest('Views/Home/'));
});