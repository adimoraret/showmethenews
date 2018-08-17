const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (env) {
  const isDevelopment = env === 'development';
  console.log(`Running in ${isDevelopment ? 'development' : 'production'} mode`);

  const baseConfiguration = {
    entry: {
      'Index': './src/ui/pages/index/Index.js',
    },
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "assets/js/[name].js",
      publicPath: "/" // how it's referenced from the html "<script src='/index.js'></script>"
    },
    externals: {
      'vue': 'Vue',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /.vue$/,
          loader: 'vue-loader'
        },
        {
          test: [/\.scss$/],
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }]
        }
      ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, './src/html'),
      publicPath: '/',
      watchContentBase: true, //true to watch static content.
      hot: true,
      overlay: true
    },
    plugins: [
      new CleanWebpackPlugin(['./dist']),
      new webpack.DefinePlugin({
        ENV_IS_DEVELOPMENT: isDevelopment,
        'process.env.NODE_ENV': JSON.stringify(env)
      })
    ]
  };

  if (isDevelopment) {
    baseConfiguration.plugins.push(new webpack.NamedModulesPlugin());
    baseConfiguration.plugins.push(new webpack.HotModuleReplacementPlugin());
  } else {
    baseConfiguration.devtool = '';
    baseConfiguration.plugins.push(new CopyWebpackPlugin([
      { from: 'src/html/theme', to: './theme' },
      { from: 'src/html/index.html', to: './[name].[ext]' }
    ]));
  }

  return baseConfiguration;
}
