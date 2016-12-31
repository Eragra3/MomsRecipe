var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');

gulp.task('default', ['scripts']);

gulp.task('scripts', [
    'scripts.packages',
    'scripts.app.modules',
    'scripts.app',
    'scripts.inject'
]);

gulp.task('scripts.app', function () {
    gulp.src(['client/**/*.js', '!client/**/*.module.js'])
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('wwwroot/scripts'));
});

gulp.task('scripts.app.modules', function () {
    gulp.src('client/**/*.module.js')
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

gulp.task('scripts.inject', function () {
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

