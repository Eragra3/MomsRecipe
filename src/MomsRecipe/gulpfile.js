var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', ['scripts']);

gulp.task('scripts', ['scripts.packages', 'scripts.app.modules', 'scripts.app']);

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


