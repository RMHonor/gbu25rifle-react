const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: `${__dirname}/src`,

  entry: {
    bundle: ['./index.jsx', './assets/styles/page.scss'],
  },

  output: {
    filename: '[name].[hash].js',
    path: `${__dirname}/dist`,
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?sourceMap'],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader?sourceMap',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name][hash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};
