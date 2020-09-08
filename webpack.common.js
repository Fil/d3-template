const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),

  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader',   // 2. Css to commonJS
          'sass-loader'   // 1. Convert sass to css
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /.(jpg|gif|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: 'img'
          }
        }
      }
    ]
  }
}