

/* -----------------------------------
 *
 * Flags
 *
 * -------------------------------- */

const DEBUG = process.argv.includes('--debug');
const RELEASE = process.argv.includes('--release');


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

   csproj: {
      name: 'IDL.Web.Vc.csproj',
      xpath: '/xmlns:Project/xmlns:ItemGroup[xmlns:Content]',
      xmlns: 'http://schemas.microsoft.com/developer/msbuild/2003',
      element: 'Content',
      attribute: 'Include',
      dist: 'Content\\dist\\'
   },

   path: {
      root: './',
      dist: './dist/',
      src: './src/',
      style: './src/style/client/'
   },

   scss: {
      lintYml: './sass-lint.yml'
   },

   uglify: {
      mangle: RELEASE,
      comments: false,
      sourceMap: false,
      compress: {
         unused: true,
         dead_code: RELEASE,
         screw_ie8: true,
         warnings: false,
         drop_console: RELEASE,
         drop_debugger: RELEASE,
         conditionals: true,
         evaluate: true,
         sequences: true,
         booleans: true,
         passes: 1
      }
   }

};
