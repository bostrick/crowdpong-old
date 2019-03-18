
HtmlWebpackPlugin = require('html-webpack-plugin')  # installed via npm
path = require('path')

module.exports =

  mode: 'development'

  entry: './src/index.ts'

  output:
    path: path.resolve(__dirname, 'dist')
    filename: 'bundle.js'

  plugins: [
    new HtmlWebpackPlugin(template: './src/index.html')
  ]


