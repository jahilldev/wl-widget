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
 * Globals
 *
 * -------------------------------- */

const GLOBALS = {
   'process.env.NODE_ENV': !RELEASE ? '"development"' : '"production"',
   __DEV__: DEBUG,
 };


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
      filename: config.asset.client,
      chunkFilename: !RELEASE ? '[id].js' : '[id]-[chunkhash:8].js',
      jsonpFunction: '__VC__',
      publicPath: '/dist/'
   },

   resolve: {
      alias: {
			'react': 'preact-compat',
         'react-dom': 'preact-compat'
      },
      modules: [
         'node_modules'
      ],
      extensions: [
         '.ts',
         '.tsx',
         '.js',
         '.json',
         '.scss'
      ]
   },

   module: {
      loaders: [
         {
            test: /\.tsx?$/,
            enforce: 'pre',
            loader: 'tslint-loader',
            options: {
               fix: true
            }
         },
         {
            test: /\.tsx?$/, 
            use: [
               {
                  loader: 'ts-loader'
               }
            ]
         },
         {
            test: /\.scss$/,
            use: [
               {
                  loader: 'style-loader'
               },
               {
                  loader: 'css-loader?modules&localIdentName=[local]_[hash:base64:6]'
               },
               {
                  loader: 'sass-loader?sourceMap'
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

      new webpack.DefinePlugin({ 
         ...GLOBALS, 
         'process.env.BROWSER': true 
      }),

      new PublicPathPlugin({
         runtimePublicPath: 'window.__vcasset__'
      }),

      new webpack.optimize.OccurrenceOrderPlugin(true),

      ...RELEASE ? [

         new webpack.optimize.UglifyJsPlugin(
            config.uglify
         )

      ] : [

         new webpack.NoEmitOnErrorsPlugin(),

         new webpack.optimize.UglifyJsPlugin(
            config.uglify
         )

      ]

   ]

};