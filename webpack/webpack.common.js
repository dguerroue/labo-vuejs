const path_root          = require('../modules/path-root');

const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const HtmlWebpackPlugin       = require('html-webpack-plugin');
const VueLoaderPlugin         = require('vue-loader/lib/plugin');
const IconfontPlugin          = require('iconfont-plugin-webpack');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: path_root('resources/js/app.js')
  },
  output: {
    path: path_root('public'),
    filename: 'js/[name].[hash].js'
  },
  resolve: {
    // extensions: ['.scss', '.css', '.js', '.json', '.vue'],
    alias: {
      '~': '../'
    }
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: [
        'js/main.*.js',
        'js/main.*.js.map',
        'css/main.*.css',
        'css/main.*.css.map'
      ]
    }),
    new VueLoaderPlugin(),
    new IconfontPlugin({
      src: path_root('resources/img/icons-font-svg'), // required - directory where your .svg icons files are located
      family: 'icon-font', // optional - the `font-family` name
      dest: {
          font: path_root('public/fonts/icon-font/[family].[type]'), // required - path of generated font files
          css: path_root('resources/scss/content/_[family].scss/') // required - path of generated css files
      },
      watch: {
          pattern: path_root('resources/img/icons-font-svg/**/*.svg'), // required - watch these files to reload
      }
    }),
    new HtmlWebpackPlugin({
      template: path_root('resources/templates/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
};
