const webpack = require('webpack');
const PublicPathPlugin = require('webpack-runtime-public-path-plugin')
const path = require('path');
const fs = require('fs');
const config = require('./config');


/* -----------------------------------
 *
 * Flags
 *
 * -------------------------------- */

const DEBUG = process.argv.includes('--debug');
const RELEASE = process.argv.includes('--release');


/* -----------------------------------
 *
 * Webpack
 *
 * -------------------------------- */

module.exports = {

   context: path.join(__dirname, config.path.src),

   cache: !RELEASE,

   target: 'web',

   output: {
      filename: !RELEASE ? '[name].js' : '[name].js',
      chunkFilename: !RELEASE ? '[id].js' : '[id]-[chunkhash:8].js',
      jsonpFunction: '__VC__',
      publicPath: '/content/dist/'
   },

   resolve: {
      modules: [
         'node_modules'
      ],
      extensions: [
         '.tsx',
         '.ts',
         '.js',
         '.json',
         '.scss'
      ]
   },

   module: {
      loaders: [
         {
            test: /\.tsx$/,
            enforce: 'pre',
            loader: 'tslint-loader',
            options: {
               fix: true
            }
         },
         {
            test: /\.tsx$/, 
            use: [
               {
                  loader: 'ts-loader'
               }
            ]
         }
      ]
   },

   plugins: [

      new webpack.LoaderOptionsPlugin({
         minimize: !DEBUG,
         debug: DEBUG
      }),

      // new PublicPathPlugin({
      //    runtimePublicPath: 'window.__routes.cdn'
      // }),

      new webpack.optimize.OccurrenceOrderPlugin(true),

      ...RELEASE ? [

         new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            comments: false,
            sourceMap: false,
            compress: {
               unused: true,
               dead_code: true,
               screw_ie8: true,
               warnings: false,
               drop_console: true,
               drop_debugger: true,
               conditionals: true,
               evaluate: true,
               sequences: true,
               booleans: true,
               passes: 1
            }
         })

      ] : [

         // No emit errors
         // https://webpack.js.org/plugins/no-emit-on-errors-plugin/
         new webpack.NoEmitOnErrorsPlugin()

      ]

   ]

};