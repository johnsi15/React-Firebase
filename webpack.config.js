const path = require('path');

/* // El public path supuestamente es para poder llamar el bundle desde un html.
// Nota este primer config se uso para correr un bundle en html básico
const config = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
            plugins: []
          }
        }
      }
    ]
  },
  plugins: []
} */

// El publicPath supuestamente es para poder llamar el bundle desde un html.
// Nota tener en cuenta que realmente el publiPath no se necesita en este caso.
const config = {
  entry: {
    app: './src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true,
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: []
          }
        }
      }
    ]
  },
  plugins: []
}

module.exports = config;
