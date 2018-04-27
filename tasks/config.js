
/* -----------------------------------
 *
 * Config
 *
 * -------------------------------- */

module.exports = {

   asset: {
      manifest: 'assets.json',
      vendor: 'vendor.js',
      client: 'client.js',
      styles: 'style.css',
      fonts: 'fonts.css'
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
      compress: {
         dead_code: true,
         unused: true,
         drop_console: true
      }
   }

};
