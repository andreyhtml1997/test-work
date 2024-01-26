let gulp = require('gulp'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass')(require('sass')),
	cleancss = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	rigger = require('gulp-rigger'),
	browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
	browserSync({
		server: { baseDir: 'app' },
		notify: false,
	})
});

function bsReload(done) { browserSync.reload(); done(); };

gulp.task('styles', function () {
	return gulp.src('app/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(autoprefixer({
			grid: true,
			overrideBrowserslist: ['last 10 versions']
		}))
		.pipe(gulp.dest('app/css'))
		.pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
		// .pipe(rename('main.min.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream())
});

gulp.task('html', function () {
	return gulp.src('app/html-dev/*.html')
		.pipe(rigger())
		.pipe(gulp.dest('app/'))
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts', function () {
	return gulp.src('app/js/**/*.js')
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function () {
	gulp.watch('app/sass/**/*.scss', gulp.parallel('styles'));
	gulp.watch('app/js/**/*.js', gulp.parallel('scripts'));
	gulp.watch('app/html-dev/**/*.html', gulp.parallel('html'));
});

gulp.task('default', gulp.parallel('styles', 'browser-sync', 'watch'));