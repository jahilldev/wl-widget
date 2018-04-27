const gulp = require('gulp');
const sequence = require('gulp-sequence');
const util = require('gulp-util');
const server = require('browser-sync').create();
const error = require('./tasks/error');
const config = require('./tasks/config');


/* -----------------------------------
 *
 * Task
 *
 * -------------------------------- */

function task(task, attr) {
   return require('./tasks/' + task)(config, gulp, attr);
}


/* -----------------------------------
 *
 * Server
 *
 * -------------------------------- */

gulp.task('server:start', task('server-start', server));
gulp.task('server:reload', task('server-reload', server));


/* -----------------------------------
 *
 * JS
 *
 * 
 * -------------------------------- */

gulp.task('js:clean', task('clean', 'js'));
gulp.task('js:core', task('js-core'));
gulp.task('js:lint', task('js-lint'));
gulp.task('js:demo', task('js-demo'));


/* -----------------------------------
 *
 * Watch
 *
 * -------------------------------- */

gulp.task('watch', task('watch'));


/* -----------------------------------
 *
 * Default
 *
 * -------------------------------- */

gulp.task('default', sequence(
   ['js:clean'],
   ['js:core', 'js:lint'],
   'js:demo',
   'server:start',
   'watch'
));