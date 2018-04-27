const webpack = require('webpack-stream');
const source = require('vinyl-source-stream');
const named = require('vinyl-named');
const buffer = require('vinyl-buffer');
const del = require('del');
const fs = require('fs');
const path = require('path');
const setup = require('./webpack');
const error = require('./error');


/* -----------------------------------
 *
 * Flags
 *
 * -------------------------------- */

const DEBUG = process.argv.includes('--debug');
const RELEASE = process.argv.includes('--release');


/* -----------------------------------
 *
 * Hash
 *
 * -------------------------------- */

module.exports = (config, gulp) => {

   const entry = `${config.path.src}index.tsx`;

   return () => {

      return gulp
      .src(entry)
      .pipe(
         named()
      )
      .pipe(
         webpack(setup)
      )
      .on('error', error)
      .pipe(
         gulp.dest(config.path.dist)
      );

   }

};
