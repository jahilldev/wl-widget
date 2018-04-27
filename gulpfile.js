const gulp = require('gulp');
const sequence = require('gulp-sequence');
const util = require('gulp-util');
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
 * JS
 *
 * -------------------------------- */

gulp.task('js:clean', task('clean', 'js'));
gulp.task('js:client', task('js-client'));


/* -----------------------------------
 *
 * CSS
 *
 * -------------------------------- */

gulp.task('css:clean', task('clean', 'css'));


/* -----------------------------------
 *
 * Watch
 *
 * -------------------------------- */

gulp.task('watch', task('watch'));


/* -----------------------------------
 *
 * Pull Request
 *
 * -------------------------------- */

gulp.task('pull-request', sequence(
   ['js:clean', 'css:clean'],
   ['js:client']
))


/* -----------------------------------
 *
 * Production
 *
 * -------------------------------- */

gulp.task('production', sequence(
   ['js:clean', 'css:clean'],
   ['js:client']
));


/* -----------------------------------
 *
 * Default
 *
 * -------------------------------- */

gulp.task('default', sequence(
   ['js:clean', 'css:clean'],
   ['js:client'],
   'watch'
));
