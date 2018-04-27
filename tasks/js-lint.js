const tslint = require('gulp-tslint');


/* -----------------------------------
 *
 * Lint
 *
 * -------------------------------- */

module.exports = (config, gulp) => {

   return () => {

      return gulp
      .src(config.path.src + '**/*.ts')
      .pipe(
         tslint({
            formatter: 'stylish',
            fix: true,
            rulesDirectory: config.path.rules
         })
      )
      .pipe(
         tslint.report({
            summarizeFailureOutput: true
         })
      );

   };

};
