
/* -----------------------------------
 *
 * Config
 *
 * -------------------------------- */

module.exports = {

   asset: {
      manifest: 'assets.json',
      client: 'client.js',
      styles: 'style.css'
   },

   path: {
      api: 'https://api.gb.v3.idldev.net',
      cdn: '/dist/',
      root: './',
      dist: './dist/',
      src: './src/',
      style: './src/style/client/'
   },

   scss: {
      lintYml: './sass-lint.yml'
   },

   uglify: {
      compress: {
         dead_code: true,
         unused: true,
         drop_console: true
      }
   }

};
