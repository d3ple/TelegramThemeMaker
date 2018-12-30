/*
 * Gulp dependencies
 */
const gulp          = require('gulp');
const plumber       = require('gulp-plumber');
const sass          = require('gulp-sass');
const cleanCSS      = require('gulp-clean-css');
const autoprefixer  = require('gulp-autoprefixer');
const babel         = require('gulp-babel');
const minify        = require('gulp-minify');
const imagemin      = require('gulp-imagemin');
const browserSync   = require('browser-sync').create();

/*
 * Configuration
 */
const config = {
    source: './src',
    output: './build',
};


gulp.task('scss', () =>
    gulp.src(config.source + '/scss/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
        .pipe(cleanCSS())
        .pipe(gulp.dest(config.output + '/css'))
        .pipe(browserSync.stream())
);

gulp.task('js', () =>
    gulp.src(config.source + '/js/**/*.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.min.js'
            }
        }))
        .pipe(gulp.dest(config.output + '/js'))
        .pipe(browserSync.stream())
);


gulp.task('images', () =>
    gulp.src(config.source + '/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest(config.output + '/images'))
);


gulp.task('serve', ['js', 'scss'], () => {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(config.source + '/scss/**/*.scss', ['scss']);
    gulp.watch(config.source + '/js/**/*.js', ['js']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('build', ['scss', 'js', 'images']);
gulp.task('default', ['build', 'serve']);
